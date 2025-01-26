import { useState, useEffect } from 'react';
import api from '../../../lib/axios';
import { logout } from '../../../hooks/service/authService';

interface User {
    name: string;
    email: string;
  }
const UserPage = () => {
    const [user, setUser] = useState<User | null>(null);
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await api.get('/user');  // APIリクエスト
                setUser(response.data);  // ユーザー情報を設定
            } catch (error) {
                console.error(' ExceptiopnError[GET]:/user')
            }
        };
        fetchUser();
    }, []);
  
    if (!user) return <div>Loading...</div>;
    return (
        <>
            <div>
                <p>UserName: {user.name}</p>
                <p>Email: {user.email}</p>
            </div>
           <button onClick={logout} >logout</button>
        </>
        
    );
    
};
export default UserPage;


