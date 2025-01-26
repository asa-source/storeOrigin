import apiPublic from '../../lib/api'; //public
import api from '../../lib/axios'; //Auth

// ログインします。
export const login = async(email: string,password: string) => {
    await apiPublic.post('/login', {email, password,});
}
// ログアウトします。
export const logout = async() => {
    await api.post('/logout');
}

// ユーザー情報を取得します。
export const getUser = async (): Promise<void> => {
    const response = await api.get('/user'); 
    return response.data
};
