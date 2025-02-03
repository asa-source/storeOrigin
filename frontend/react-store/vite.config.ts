import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path';
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  define: {
    'process.env': process.env
  },
  server: {
    port: 3000, // 開発サーバーのポート
    host: '0.0.0.0', // 外部からアクセス可能にする
    proxy: {
      '/api': {
        target: 'http://localhost:8000', // LaravelサーバのURL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // 必要に応じてパスを書き換える
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src') ,
    },
  },
})
