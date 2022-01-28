<template>
  <footer class="bg-teal-100 mt-12 pb-4 border-t border-teal-200 text-teal-900 text-center w-full flex flex-col justify-center items-center gap-0 sm:flex-row sm:gap-x-8">
    <div class="p-4 text-center sm:text-right">
      <h3 class="font-semibold text-xl">Tutorial</h3>
      <ul>
        <li>
          <a href="" target="_blank">Build a Wordle Clone in Vue 3</a>
        </li>
      </ul>
      <h3 class="font-semibold text-xl">Resources</h3>
      <ul>
        <li>
          <a href="https://www.powerlanguage.co.uk/wordle/" target="_blank">Wordle (original)</a>
        </li>
        <li>
          <a href="https://v3.vuejs.org" target="_blank">Vue.js</a>
        </li>
        <li>
          <a href="https://pinia.vuejs.org/" target="_blank">Pinia 🍍</a>
        </li>
        <li>
          <a href="https://vueuse.org/" target="_blank">VueUse</a>
        </li>
        <li>
          <a href="https://rapidapi.com/dpventures/api/wordsapi" target="_blank">Words API</a>
        </li>
        <li>
          <a href="https://axios-http.com/docs/intro" target="_blank">Axios</a>
        </li>
        <li>
          <a href="https://windicss.org" target="_blank">WindiCSS</a>
        </li>
        <li>
          <a href="https://tailwindcss.com" target="_blank">TailwindCSS</a>
        </li>
        <li>
          <a href="https://animate.style" target="_blank">Animate.css</a>
        </li>
      </ul>
    </div>
    <div class="p-4 flex flex-col justify-end items-center gap-y-2 bg-gradient-to-b from-teal-50 to-teal-100 border border-teal-50 rounded-lg shadow shadow-teal-500/50">
      <div class="my-auto">
        <a href="" target="_blank" title="Check out my Youtube">
          <img
            src="../assets/fortress.jpeg"
            alt="a cat looking out of a hole in a cardboard box"
            class="max-w-28 max-h-28 rounded-1/2 ring-0 shadow filter saturate-75 transition-all duration-150 sm:max-w-40 sm:max-h-40 sm:mb-4 hover:ring-4 hover:ring-teal-500 hover:saturate-100 hover:shadow-xl hover:shadow-teal-500/75"
          >
        </a>
      </div>
      <p class="text-teal-600">
        👨‍💻 by <a href="" target="_blank">David Soth</a> &copy; 2022
      </p>
    </div>
  </footer>
</template>

<style scoped lang="postcss">
a {
  @apply text-teal-900 underline underline-teal-500 transition-all duration-100 hover:no-underline hover:text-teal-600;
}

ul {
  @apply mb-2;
}
</style>