import React from 'react';
import './App.css'
import { AppProvider } from './provider/AppProvider';
import { AppRoutes } from './routes/AppRoutes';

export function App() {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  )
}
export default App
