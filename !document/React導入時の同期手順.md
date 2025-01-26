## vite.config.js書き換え
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.tsx'],
            refresh: true,
        }),
    ],
    server: {
        host: 'localhost',
        port: 5173,
    }
});

## npm run devでlocalhost:80にアクセスできない場合
###　envファイルに追記
VITE_DEV_SERVER_URL=http://localhost:5173

###　vite.config.jsに追記
    plugins: [],
    server: {
        host: 'localhost',
        port: 5173,
    }
## welcome.blade.phpの書き換え
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>wlcome.blade.php</title>
     <!-- Vite Asset -->
    @vite(['resources/js/app.tsx', 'resources/css/app.css'])
</head>
<body>
    <!-- React Mount -->
    <div id="app"></div> 
</body>
</html>

## tsxを使う場合
npm install --save-dev typescript @types/react @types/react-dom
npm install react-router-dom
npm install --save-dev @types/react-router-dom

## app.tsx書き換え（app.js→app.tsx）
import React from 'react';
import ReactDOM from 'react-dom/client'; // createRootのために必要
import './app.css'; // 必要に応じてCSSを読み込む
function App() {
    return <h1>Hello, Laravel + React + Vite!</h1>;
}
// マウントポイントを取得
const rootElement = document.getElementById('app');
if (rootElement) {
    // React 18以降は createRoot を使用
    const root = ReactDOM.createRoot(rootElement);
    root.render(<App />);
}