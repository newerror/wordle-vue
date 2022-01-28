<script setup lang="ts">
import { computed } from 'vue'
import { useGameStore } from '../stores/game'
import { getVictoryMessage } from '../data/victoryMessage'

const game = useGameStore()

const triesMessage = computed(() => {
  if (game.victory) {
    return getVictoryMessage(game.tries)
  }
  if (game.gameOver || game.tries >= 6) {
    return `Game Over. The word was "${game.answer.toUpperCase()}"`
  }
  if (game.tries === 5) {
    return 'This is your FINAL guess!'
  } else {
    return `You have ${6 - game.tries} tries to guess the Wordull`
  }
})

function statusClasses () {
  if (game.victory) {
    return 'text-green-500 uppercase font-black text-6xl animate-animated animate-pulse animate-infinite'
  } else if (game.gameOver) {
    return 'bg-orange-200 text-orange-900'
  } else {
    return 'bg-teal-200 text-teal-600'
  }
}
</script>

<template>
  <section class="w-full text-center p-4 text-xl transition-all duration-150" :class="statusClasses()">
    <p>{{ triesMessage }}</p>
  </section>
</template>