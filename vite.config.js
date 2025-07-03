import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync } from 'fs'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        plugins: [
          {
            name: 'copy-redirects',
            generateBundle() {
              copyFileSync('public/_redirects', 'dist/_redirects')
            },
          },
        ],
      },
    },
  },
})

