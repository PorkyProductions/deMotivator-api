import { defineConfig } from 'vite'
import { UserConfig } from 'vite'
/** @type {import('vite').UserConfig} */

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],
  base: "/",
  build: {
    rollupOptions: {
      input: {
        index: 'src/index.ts',
      },
      output: {
        dir: 'out',
      }
    }
  }
})