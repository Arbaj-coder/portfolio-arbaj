import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { copyFileSync } from 'fs';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // hook to copy _redirects manually
      output: {
        // after build is complete
        plugins: [{
          name: 'copy-redirects',
          generateBundle() {
            copyFileSync('public/_redirects', 'dist/_redirects');
          }
        }]
      }
    }
  }
});
