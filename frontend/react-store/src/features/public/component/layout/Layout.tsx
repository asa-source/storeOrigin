import React from 'react';
import { Outlet } from 'react-router-dom';
import LayoutHeader from './LayoutHeader';

const Layout = () => {
    return (
        <>
            {/* 画面上部のヘッダー（固定） */}
            <header className="bg-gray-400 text-sm h-6 flex w-full fixed z-50">
                My System
            </header>

            {/* サイドメニューとメインコンテンツ */}
            <div className="flex flex-col h-screen ">
                {/* サイドメニュー（固定 & 最前面に配置） */}
                <LayoutHeader />

                {/* メインコンテンツ（スクロール可能） */}
                <main className="flex-1 pt-7 p-1 overflow-auto  ml-56 bg-gray-100 relative z-10">
                    <Outlet />
                </main>
                {/* フッター（固定表示） */}
                <footer className="bg-gray-300 text-center text-xs h-6 
                flex items-center justify-center w-full">
                    © 2025 My System. All rights reserved.
                </footer>
            </div>
        </>
    );
};

export default Layout;
