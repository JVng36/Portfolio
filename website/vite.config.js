import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
  base: '/Portfolio', // Replace with your actual repo name
  plugins: [react(),tailwindcss()],
  build: {
    outDir: 'build' // gh-pages expects 'build' folder
  }
})
