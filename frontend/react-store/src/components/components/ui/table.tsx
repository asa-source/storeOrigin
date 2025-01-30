import { ReactNode } from "react";

export function Table({ children, ...props }: { children: ReactNode; }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full" {...props}>
        {children}
      </table>
    </div>
  );
}

export function TableHeader({ children }: { children: ReactNode; }) {
  return (
    <thead className="bg-gray-100">
      {children}
    </thead>
  );
}

export function TableRow({ children }: { children: ReactNode; }) {
  return <tr className="border-b">{children}</tr>;
}

export function TableHead({ children }: { children: ReactNode; }) {
  return (
    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
      {children}
    </th>
  );
}

export function TableBody({ children }: { children: ReactNode; }) {
  return <tbody>{children}</tbody>;
}

export function TableCell({ children }: { children: ReactNode; }) {
  return (
    <td className="px-4 py-2 text-sm text-gray-600">
      {children}
    </td>
  );
}
