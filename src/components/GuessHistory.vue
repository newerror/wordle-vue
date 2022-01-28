<script setup lang="ts">
import { computed } from 'vue'
import { useGameStore } from '../stores/game'

const game = useGameStore()
const history = computed(() => game.history)

function highlightLetter (letter) {
  if (letter.correct) {
    return 'bg-green-300 text-green-900 border-green-200'
  }
  if (letter.included) {
    return 'bg-amber-300 text-amber-900 border-amber-200'
  }
  return 'bg-teal-50 text-teal-900 border-teal-200'
}
</script>

<template>
  <ul class="w-full flex flex-col-reverse gap-2">
    <li v-for="word in history" :key="word" class="flex flex-row flex-nowrap justify-between items-center uppercase gap-2 animate-animated animate-bounce-in">
      <div
        v-for="(letter, i) in word"
        :key="i"
        class="font-extrabold text-2xl rounded-xl border-1 shadow shadow-teal-500/50 w-24 aspect-square flex justify-center items-center transition duration-150 hover:shadow-teal-500"
        :class="highlightLetter(letter)"
      >
        {{ letter.value }}
      </div>
    </li>
  </ul>
</template>