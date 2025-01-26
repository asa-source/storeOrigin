import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    port: 5173, // 開発サーバーのポート
  },
  resolve: {
    alias: {
      '@': '/src', // インポート時に「@」を使用できるようにする例
    },
  },
})
