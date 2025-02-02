import { useEffect, useState } from "react";
import api from "../../../lib/axios";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/components/ui/table";
import { ThreeDots } from "react-loader-spinner";
import { Card } from "../../../components/components/ui/card";
import { Input } from "../../../components/components/ui/input"; // 検索ボックス用

// Employee 型を定義
type Employee = {
  id: number;
  salary_number: string;
  name: string;
  name_kana: string;
  email: string;
  status: string;
};

export default function EmployeeTable() {
  // 社員データの状態を管理
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState(""); // 検索用の状態
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null); // 選択された社員

  useEffect(() => {
    api
      .get("/api/employees")
      .then((response) => {
        setEmployees(response.data);
        setLoading(false); // ローディング終了
      })
      .catch((error) => {
        console.error(error);
        setLoading(false); // エラー時もローディング終了
      });
  }, []);

  // 検索処理（名前 or メールアドレスでフィルタリング）
  const filteredEmployees = employees.filter(
    (e) =>
      e.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      e.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // 行をクリックすると詳細情報を表示
  const handleRowClick = (employee: Employee) => {
    setSelectedEmployee(employee);
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-40">
        <ThreeDots height="40" width="40" color="#555555" ariaLabel="loading" />
      </div>
    );

  return (
    <div className="flex w-full">
      {/* 左側：テーブル */}
      <div className="w-2/3 p-2">
        {/* 検索ボックス */}
        <div className="mb-2">
          <Input
            type="text"
            placeholder="名前またはメールアドレスで検索..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="h-[30px] w-full p-2 border rounded"
          />
        </div>

        <Card className="w-full">
          <Table>
            <TableHeader>
              <TableRow className="h-auto leading-none">
                <TableCell className="py-2">ID</TableCell>
                <TableCell className="py-2">給与番号</TableCell>
                <TableCell className="py-2">社員氏名</TableCell>
                <TableCell className="py-2">メールアドレス</TableCell>
                <TableCell className="py-2">社員状態</TableCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredEmployees.length > 0 ? (
                filteredEmployees.map((e) => (
                  <TableRow
                    key={e.id}
                    className={`h-auto cursor-pointer hover:bg-gray-200 ${
                      selectedEmployee?.id === e.id ? "bg-gray-200" : ""
                    }`}
                    onClick={() => handleRowClick(e)}
                    
                  >
                    <TableCell className="py-1">{e.id}</TableCell>
                    <TableCell className="py-1">{e.salary_number}</TableCell>
                    <TableCell className="py-1">{e.name}</TableCell>
                    <TableCell className="py-1">{e.email}</TableCell>
                    <TableCell className="py-1">{e.status}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-2">
                    該当する社員が見つかりません
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </Card>
      </div>

      {/* 右側：選択された社員の詳細 */}
      {selectedEmployee && (
        <div className="w-1/3 pt-2 pr-2">
          <Card className="p-4">
            <h2 className="text-sm mb-2">社員詳細</h2>
            <p><strong>ID:</strong> {selectedEmployee.id}</p>
            <p><strong>給与番号:</strong> {selectedEmployee.salary_number}</p>
            <p><strong>氏名:</strong> {selectedEmployee.name}</p>
            <p><strong>ふりがな:</strong> {selectedEmployee.name_kana}</p>
            <p><strong>メールアドレス:</strong> {selectedEmployee.email}</p>
            <p><strong>社員状態:</strong> {selectedEmployee.status}</p>
          </Card>
        </div>
      )}
    </div>
  );
}
