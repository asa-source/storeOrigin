import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import LayoutHeader from './LayoutHeader';

const Layout = () => {
    
    return (
        <>
            <h1>
                This is Layout Compornent
            </h1>
            <LayoutHeader />
            <Outlet />
        </>
    );
};
export default Layout;