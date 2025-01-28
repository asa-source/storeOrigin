import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../../hooks/service/authService';
import { Card, CardContent, CardFooter } from '../../../components/components/ui/card';
import { Label } from '../../../components/components/ui/label';
import { Input } from '../../../components/components/ui/input';
import { Button } from '../../../components/components/ui/button';
import { ThreeDots } from 'react-loader-spinner';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false); // ローディング状態の管理
    const navigate = useNavigate();
    
    const handleLogin = async () => {
        setLoading(true); // ローディング開始
        const success = await login(email, password);
        setLoading(false); // ローディング終了
        
        if (success) {
            navigate('/user');
            console.log("Login Successfull");
        } else {
            console.error('Login failed');
        }
    };

    return (
        <>
            <div className="flex justify-center items-center min-h-screen">
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
                            className="bg-gray-800 text-gray-50 h-[30px] flex items-center justify-center"
                            disabled={loading} // ローディング中はボタンを無効にする
                        >
                            {loading ? (
                                <ThreeDots height="40" width="40" color="#ffffff" ariaLabel="loading" />
                            ) : (
                                'ログイン'
                            )}
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </>
    );
};

export default LoginPage;
