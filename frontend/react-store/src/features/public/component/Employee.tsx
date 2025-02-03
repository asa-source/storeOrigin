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
import { Input } from "../../../components/components/ui/input";
import EmployeeDetail from "./EmployeeDetail"; // 👈 新しく分離したコンポーネントをインポート

// Employee 型を定義
type Employee = {
  id: number;
  salary_number: string;
  name: string;
  name_kana: string;
  email: string;
  status: string;
};

export default function Employee() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = () => {
    api
      .get("/api/employees")
      .then((response) => {
        setEmployees(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

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
              {employees
                .filter(
                  (e) =>
                    e.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    e.email.toLowerCase().includes(searchQuery.toLowerCase())
                )
                .map((e) => (
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
                ))}
            </TableBody>
          </Table>
        </Card>
      </div>

      {/* 右側：選択された社員の詳細情報（別コンポーネント） */}
      <EmployeeDetail employee={selectedEmployee} onUpdate={fetchEmployees} />
    </div>
  );
}
