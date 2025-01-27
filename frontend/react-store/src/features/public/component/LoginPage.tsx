// src/pages/LoginPage.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../../hooks/service/authService';
import { 
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle, } from '../../../components/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../components/components/ui/select';
import { Label } from '../../../components/components/ui/label';
import { Input } from '../../../components/components/ui/input';
import { Button } from '../../../components/components/ui/button';

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
            <Card className="w-[350px]">
                <CardContent>
                </CardContent>
                <CardContent>
                    <form>
                        <div className="grid text-gray-600 gap-4">
                            <div className="space-y-1.5">
                                <Label className="flex">メールアドレス</Label>
                                <Input 
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className='h-[30px]'/>
                            </div>
                            <div className="space-y-1.5">
                                <Label className="flex text-sm" >パスワード</Label>
                                <Input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} 
                                className='h-[30px]'/>
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="grid w-full items-center gap-4">
                    <Button
                    onClick={handleLogin}
                    className="bg-gray-800 text-gray-50 h-[30px]">ログイン</Button>
                </CardFooter>
            </Card>
        
        </>
    );
};

export default LoginPage;
