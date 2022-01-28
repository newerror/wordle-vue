<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useGameStore } from './stores/game'
import UserInput from './components/UserInput.vue'
import GameStatus from './components/GameStatus.vue'
import GuessHistory from './components/GuessHistory.vue'
import KeyboardReference from './components/KeyboardReference.vue'
import NewGameButton from './components/NewGameButton.vue'
import AttributionFooter from './components/AttributionFooter.vue'
import ShareButton from './components/ShareButton.vue'

const game = useGameStore()
const gameOver = computed(() => game.gameOver)

onMounted(() => {
  game.getNewAnswer()
})
</script>

<template>
  <header class="py-8">
    <h1 class="font-black text-5xl text-center uppercase text-teal-700 animate-animated animate-zoom-in animate-fast">
      Wor<span class="text-teal-500">dull</span>
    </h1>
  </header>

  <main class="px-4 flex flex-col justify-start items-center gap-8 sm:max-w-prose sm:mx-auto">
    <GameStatus />

    <ShareButton />

    <KeyboardReference v-if="!gameOver" />
    <div v-else class="w-full flex flex-row items-center justify-center">
      <NewGameButton />
    </div>

    <UserInput v-if="!gameOver" />

    <GuessHistory />
  </main>

  <AttributionFooter />
</template>

<style scoped lang="postcss">
main {
  min-height: 60vh;
}
</style>