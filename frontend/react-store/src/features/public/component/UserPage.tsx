import { useState, useEffect } from 'react';
import api from '../../../lib/axios';
import { logout } from '../../../hooks/service/authService';
import { Card, CardContent, CardFooter } from '../../../components/components/ui/card';
import { Button } from '../../../components/components/ui/button';
import { Label } from '../../../components/components/ui/label';
import { ThreeDots  } from 'react-loader-spinner';
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
  
    if (!user) return <div className='flex justify-center items-center'><ThreeDots height="40" width="40" color="#555555" ariaLabel="loading" /></div>
    return (
        <>
            <Card className="w-[350px]">
                <CardContent>
                </CardContent>
                <CardContent>
                    <form>
                        <div className="grid text-gray-600 gap-4">
                            <div className="space-y-1.5">
                                <Label className="flex">登録者： {user.name}</Label>
                            </div>
                            <div className="space-y-1.5">
                                <Label className="flex" >メールアドレス：{user.email}</Label>
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="grid w-full items-center gap-4">
                    <Button
                    onClick={logout}
                    className="bg-gray-800 text-gray-50 h-[30px]">ログアウト</Button>
                </CardFooter>
            </Card>
        </>
        
    );
    
};
export default UserPage;


