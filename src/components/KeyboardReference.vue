<script setup lang="ts">
import { computed } from 'vue'
import { useGameStore } from '../stores/game'

const keys = [
  [...'qwertyuiop'],
  [...'asdfghjkl'],
  [...'zxcvbnm'],
]

const game = useGameStore()

const usedLetters = computed(() => game.getUsedLetters)

function highlightKey (key) {
  if (Object.keys(usedLetters.value).includes(key)) {
    let classes = ''

    switch (usedLetters.value[key]) {
      case 'correct':
        classes = 'bg-green-300 border-green-200 text-green-900 animate-animated animate-pulse'
        break
      case 'included':
        classes = 'bg-amber-400 border-amber-200 text-amber-900 animate-animated animate-pulse'
        break
      default:
        classes = 'bg-gray-600 border-gray-200 text-gray-300 animate-animated animate-pulse'
        break
    }

    return classes
  } else {
    return 'bg-teal-200 border-teal-300 text-teal-400'
  }
}
</script>

<template>
  <div class="flex flex-col gap-1 uppercase">
    <div v-for="(row, i) in keys" :key="i" class="flex flex-row gap-1 justify-center items-center">
      <div v-for="key in row" :key="key" class="flex justify-center items-center text-sm font-semibold w-8 aspect-video border rounded shadow shadow-sm transition-all duration-150 select-none" :class="highlightKey(key)">
        {{ key }}
      </div>
    </div>
  </div>
</template>