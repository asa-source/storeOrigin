// src/pages/LoginPage.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../../hooks/service/authService';
import { Card } from '../../../components/components/ui/card';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleLogin = async () => {
        const success = await login(email, password);
        if (success) {
            navigate('/user'); 
            console.log("Login Successfull")
        } else {
            console.error('Login failed');
        }
    };

    return (
        <>
            <Card>
                <div>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <button onClick={handleLogin}>Login</button>
                </div>
            </Card>
        </>
    );
};

export default LoginPage;
