import { Home, Users, Briefcase, Mail } from 'lucide-react';
import React from 'react';
import { NavLink } from 'react-router-dom';

const LayoutHeader = () => {
    const navItems = [
        { path: "/", label: "ホーム", icon: <Home size={18} /> },
        { path: "/user", label: "ユーザー情報", icon: <Users size={18} /> },
        { path: "/employee", label: "社員一覧", icon: <Briefcase size={18} /> },
        { path: "/contact", label: "コンタクト", icon: <Mail size={18} /> },
    ];
    return (
        <aside className="bg-gray-950 text-white w-56 px-4 py-6 fixed left-0 h-[100vh] z-40">
            <nav className="flex flex-col space-y-1">
                {navItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                            `flex items-center text-sm px-3 py-2 rounded-md transition-colors ${
                                isActive ? "bg-gray-800 text-white" : "hover:text-gray-300"
                            }`
                        }
                    >
                        <span className="mr-2">{item.icon}</span>
                        {item.label}
                    </NavLink>
                ))}
            </nav>
        </aside>
    );
};

export default LayoutHeader;
