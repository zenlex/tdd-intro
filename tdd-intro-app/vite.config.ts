/// <reference types="vitest" />
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [Vue()],

  test: {
    exclude: ['**/node_modules/**', '**/tests/e2e/**', '**/dist/**'],
    environment: 'happy-dom'
  }
})
