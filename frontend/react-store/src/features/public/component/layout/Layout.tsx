import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import LayoutHeader from './LayoutHeader';

const Layout = () => {
    
    return (
        <>
            <LayoutHeader />
            <Outlet />
        </>
    );
};
export default Layout;