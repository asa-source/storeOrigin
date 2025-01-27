import './index.css';  // index.cssはmain.tsxで一度だけインポート
import './App.css'; 
import ReactDOM from 'react-dom/client'; 
import App from './App.tsx'
import React from 'react'

const rootElement = document.getElementById('root');
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
}else{
    console.error("Content 404 Not Found")
}