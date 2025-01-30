import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useEffect, useState } from "react";
import api from "../../../lib/axios";
import { useReactTable } from "@react-table";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../../components/components/ui/table";
import { JSX } from "react/jsx-runtime";

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
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    api.get("/api/employees")
      .then(response => setEmployees(response.data))
      .catch(error => console.error(error));
  }, []);

  // useReactTable を使ってテーブルのロジックを設定
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useReactTable({
    data: employees,
  });

  return (
    <Table {...getTableProps()}>
      <TableHeader>
        {headerGroups.map((headerGroup: { getHeaderGroupProps: () => JSX.IntrinsicAttributes & { children: ReactNode; }; id: Key | null | undefined; headers: any[]; }) => (
          <TableRow {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
            {headerGroup.headers.map(column => (
              <TableHead {...column.getHeaderProps()} key={column.id}>
                {column.render('Header')}
              </TableHead>
            ))}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody {...getTableBodyProps()}>
        {rows.map((row: { getRowProps: () => JSX.IntrinsicAttributes & { children: ReactNode; }; id: Key | null | undefined; cells: { getCellProps: () => JSX.IntrinsicAttributes & { children: ReactNode; }; id: Key | null | undefined; render: (arg0: string) => string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }[]; }) => {
          prepareRow(row);
          return (
            <TableRow {...row.getRowProps()} key={row.id}>
              {row.cells.map((cell: { getCellProps: () => JSX.IntrinsicAttributes & { children: ReactNode; }; id: Key | null | undefined; render: (arg0: string) => string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) => (
                <TableCell {...cell.getCellProps()} key={cell.id}>
                  {cell.render('Cell')}
                </TableCell>
              ))}
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
