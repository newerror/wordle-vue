<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { useGameStore } from '../stores/game'

const game = useGameStore()
const word = ref('')
const input = ref(null)

watchEffect(() => input.value.focus(), { flush: 'post' }) // makes watchEffect wait until DOM rendered before running

function guess () {
  game.guess(word.value)
  word.value = ''
}
</script>

<template>
  <section class="w-full flex flex-col gap-4 items-center">
    <div class="flex flex-col gap-4 justify-center items-center w-full sm:flex-row sm:justify-between">
      <input
        v-model="word"
        autofocus
        type="text"
        maxlength="5"
        ref="input"
        :disabled="game.gameOver"
        class="bg-teal-50 text-3xl uppercase w-full text-teal-900 font-semibold p-4 rounded-md ring ring-teal-200 caret-teal-500
          sm:w-3/4
          focus:outline-transparent focus:ring-teal-400 focus:animate-animated focus:animate-pulse focus:animate-faster"
        @keyup.enter="guess"
      >

      <button
        :disabled="game.gameOver"
        class="bg-teal-500 text-teal-100 w-full rounded text-2xl uppercase font-semibold py-2 border-2 border-teal-300 shadow-lg shadow-teal-900/50 animate-animated transition-all duration-150
          sm:w-1/4
          hover:shadow-xl hover:shadow-teal-900/50 hover:animate-pulse hover:animate-infinite"
        @click="guess"
      >
        Guess
      </button>
    </div>

    <p
      v-if="!game.validGuess"
      class="italic font-semibold text-center text-red-400 animate-animated animate-headShake sm:text-left sm:self-start sm:pl-4"
    >
      <span class="not-italic">⚠️</span> You must guess a valid 5-letter word
    </p>
  </section>
</template>