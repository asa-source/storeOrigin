import axios from 'axios';
// axiosインスタンスを作成
const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
});
// インターセプターでリクエストの前にトークンをチェック
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            // Authorizationヘッダにトークンを設定
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
// インターセプターでレスポンスのエラーチェック
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            // トークンが無効または期限切れの場合
            localStorage.removeItem('token');  // トークンを削除
            window.location.href = '/login';   // ログインページにリダイレクト
        }
        return Promise.reject(error);
    }
);
export default api;