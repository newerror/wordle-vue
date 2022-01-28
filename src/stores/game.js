import { defineStore } from 'pinia'
import axios from 'axios'

export const useGameStore = defineStore('game', {
  state: () => {
    return {
      tries: 0,
      answer: '',
      history: [],
      victory: false,
      gameOver: false,
      grid: [],
      validGuess: true,
    }
  },

  getters: {
    getUsedLetters (state) {
      return state.history.reduce((usedLetters, currentGuess) => {
        for (const letter of currentGuess) {
          if (letter.value in usedLetters) {
            if (usedLetters[letter.value] !== 'correct' && letter.correct) {
              usedLetters[letter.value] = 'correct'
            }
          } else if (letter.correct) {
            usedLetters[letter.value] = 'correct'
          } else if (letter.included) {
            usedLetters[letter.value] = 'included'
          } else {
            usedLetters[letter.value] = 'incorrect'
          }
        }
        return usedLetters
      }, {})
    },

    getSolution (state) {
      if (!state.victory) return 'No solution.'

      const grid = state.grid.reduce((acc, curr) => {
        return acc.concat(curr).map(l => l.join(''))
      }, [])

      return `Wordull: "${state.answer.toUpperCase()}" (${state.tries}/6)${'\n'}${grid.join('\n')}`
    },
  },

  actions: {
    async validateWord(word) {
      if (word.length !== 5) {
        this.validGuess = false
        return false
      }

      const result = await axios({
        method: 'GET',
        url: import.meta.env.VITE_API_URL + word,
        headers: {
          'x-rapidapi-host': import.meta.env.VITE_API_HOST,
          'x-rapidapi-key': import.meta.env.VITE_API_KEY,
        }
      })
        .then(res => {          
          this.validGuess = true
          return true
        })
        .catch(() => {
          this.validGuess = false
          return false
        })
      
      return result
    },

    async guess(userInput) {
      const word = userInput.trim().toLowerCase()
      const wordIsValid = await this.validateWord(word)

      if (wordIsValid) {
        const splitWord = [...userInput.trim().toLowerCase()]
        const splitAnswer = [...this.answer.toLowerCase()]
  
        const markedWordArr = splitWord.map((letter, index) => {
          const correct = splitWord[index] === splitAnswer[index]
          const included = !correct && splitAnswer.includes(letter)
  
          return { value: letter, included, correct }
        })
  
        this.history.push(markedWordArr)
        this.tries++
  
        if (userInput.trim().toLowerCase() === this.answer.toLowerCase()) {
          this.victory = true
          this.gameOver = true
          this.generateGrid()
          return
        }
  
        if (this.tries >= 6) {
          this.gameOver = true
          return
        }
      }
    },

    generateGrid() {
      const grid = []
      for (const entry of this.history) {
        const row = []

        for (const letter of entry) {
          if (letter.correct) {
            row.push('🟩')
          } else if (letter.included) {
            row.push('🟨')
          } else {
            row.push('⬛')
          }
        }

        grid.push(row)
      }
      
      this.grid.push(grid)
    },

    newGame() {
      this.$reset()
      this.getNewAnswer()
    },

    async getNewAnswer() {
      await axios({
        method: 'GET',
        url: import.meta.env.VITE_API_URL,
        params: {
          letterPattern: '^[a-zA-Z]{5}$',
          random: 'true',
          frequencyMin: '3.5',
          hasDetails: 'definitions',
        },
        headers: {
          'x-rapidapi-host': import.meta.env.VITE_API_HOST,
          'x-rapidapi-key': import.meta.env.VITE_API_KEY,
        }
      })
        .then(res => {          
          this.answer = res.data.word
        })
        .catch(err => console.error('Something went horribly wrong', err))
    }
  },
})
