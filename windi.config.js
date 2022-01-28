import { defineConfig } from "vite-plugin-windicss"

export default defineConfig({
  plugins: [
    require('@windicss/plugin-animations'),
    require('windicss/plugin/aspect-ratio'),
  ],
})
