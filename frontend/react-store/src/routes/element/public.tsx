import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from '../../features/public/component/Dashboard';
import LoginPage from '../../features/public/component/LoginPage';
import Layout from '../../features/public/component/layout/Layout';
import UserPage from '../../features/public/component/UserPage';
import Employee from '../../features/public/component/Employee';

export const routesPublic = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'user', element: <UserPage /> },
      { path: 'employee', element: <Employee /> },
      { index: true, element: <Navigate to="dashboard" /> },
      { path: '*', element: <Navigate to="dashboard" /> },
    ],
  },
  {
    path: 'login',
    element: <LoginPage />
  }
];
