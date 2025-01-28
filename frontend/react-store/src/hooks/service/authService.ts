// src/services/authService.ts
import apiPublic from "../../lib/api";
import api from "../../lib/axios";

// ログインします。
export const login = async (email: string, password: string) => {
    try {
        const response = await apiPublic.post('/api/login', { email, password });
        const { token } = response.data;
        if (token) {
            localStorage.setItem('token', token);
            return true;
        }
        return false;
    } catch (error) {
        return false;
    }
};

// ログアウトします。
export const logout = async () => {
    try {
        await api.post('/api/logout');
        localStorage.removeItem('token');
    } catch (error) {
    }
};
