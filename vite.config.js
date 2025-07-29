import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  theme: {
    extend: {},
  },
  plugins: [react(),tailwindcss(),],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'https://chat-app-backend-tau-lemon.vercel.app',
        changeOrigin: true,
      },
    },
  },
})
