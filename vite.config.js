import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: process.env.GITHUB_PAGES === 'true' ? '/abdulrdeveloper/' : '/',
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
    hmr:{
      localhost: 'localhost',
    }
  },
})
