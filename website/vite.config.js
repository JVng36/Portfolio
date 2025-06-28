import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Portfolio/', // Replace with your actual repo name
  plugins: [react()],
  build: {
    outDir: 'build' // gh-pages expects 'build' folder
  }
})
