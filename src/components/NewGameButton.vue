<script setup lang="ts">
import { useGameStore } from '../stores/game'

const game = useGameStore()
</script>

<template>
  <button
    class="bg-cyan-300 ring ring-cyan-200 text-cyan-500 font-bold rounded px-6 py-4 text-xl uppercase shadow-lg shadow-teal-500/50 transition-all duration-150 animate-animated hover:bg-cyan-400 hover:text-cyan-100 hover:ring-cyan-300 hover:shadow-2xl hover:animate-tada hover:animate-infinite"
    @click="game.newGame()"
  >
    Play Again
  </button>
</template>