<script setup lang="ts">
import { useGameStore } from '../stores/game'
import { useClipboard } from '@vueuse/core'

const game = useGameStore()
const { copy, copied } = useClipboard({ copiedDuring: 3500 })
</script>

<template>
  <div v-if="game.victory" class="text-center w-full">
    <button @click="copy(game.getSolution)" class="text-teal-500 underline underline-teal-300 transition-all duration-150 hover:text-teal-700 hover:underline-teal-400">
      <span v-if="!copied">Share Results</span>
      <span v-else class="animate-animated animate-infinite animate-slow animate-flash">Results copied to clipboard!</span>
    </button>
  </div>
</template>