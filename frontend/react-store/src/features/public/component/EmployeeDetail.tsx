import { Input } from "../../../components/components/ui/input";
import { Button } from "../../../components/components/ui/button";
import { Card } from "../../../components/components/ui/card";
import { useState, useEffect } from "react";
import api from "../../../lib/axios";
import { ThreeDots } from "react-loader-spinner";

// Employee 型
type Employee = {
  id: number;
  salary_number: string;
  name: string;
  name_kana: string;
  email: string;
  status: string;
};

// Props の型定義
type EmployeeDetailProps = {
  employee: Employee | null;
  onUpdate: () => void;
};

export default function EmployeeDetail({ employee, onUpdate }: EmployeeDetailProps) {
  const [formData, setFormData] = useState<Employee | null>(employee);
  const [loading, setLoading] = useState(false); // ローディング状態の管理
      
  // `employee` が変更されたら `formData` を更新
  useEffect(() => {
    setFormData(employee);
  }, [employee]);

  if (!formData) return null;

  // 入力変更を反映
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 編集した情報をAPIに送信
  const handleSave = async () => {
    if (!formData) return;

    try {
      setLoading(true); // ローディング開始
      await api.put(`/api/employees/${formData.id}`, formData);
      setLoading(false); // ローディング開始
      console.log("社員情報を更新しました");
      onUpdate(); // 親コンポーネントの一覧を更新
    } catch (error) {
      console.error("更新失敗:", error);
    }
  };

  return (
    <div className="w-1/3 pt-2 pr-2">
      <Card className="p-4">
        <h2 className="text-sm mb-2">社員詳細</h2>
        <Input name="salary_number" value={formData.salary_number} onChange={handleChange} placeholder="給与番号" />
        <Input name="name" value={formData.name} onChange={handleChange} placeholder="社員氏名" />
        <Input name="name_kana" value={formData.name_kana} onChange={handleChange} placeholder="ふりがな" />
        <Input name="email" value={formData.email} onChange={handleChange} placeholder="メールアドレス" />
        <Input name="status" value={formData.status} onChange={handleChange} placeholder="社員状態" />
        <Button 
        disabled={loading}
        className="mt-2 bg-gray-800 text-gray-50 h-[30px] flex items-center justify-center w-full" onClick={handleSave}>
          {loading ? (
              <ThreeDots height="40" width="40" color="#ffffff" ariaLabel="loading" />
          ) : (
              '保存'
          )}
        </Button>
      </Card>
    </div>
  );
}
