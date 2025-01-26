import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from '../../features/public/component/Dashboard';
import LoginPage from '../../features/public/component/LoginPage';
import Layout from '../../features/public/component/layout/Layout';
import UserPage from '../../features/public/component/UserPage';

export const routesPublic = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'user', element: <UserPage /> },
      { index: true, element: <Navigate to="dashboard" /> },
      { path: '*', element: <Navigate to="dashboard" /> },
    ],
  },
  {
    path: 'login',
    element: <LoginPage />
  }
];
