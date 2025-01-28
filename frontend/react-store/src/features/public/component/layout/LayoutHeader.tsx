import React, { useState } from 'react';
import { Button } from '../../../../components/components/ui/button';

const LayoutHeader = () => {

    return (
        <header className="bg-gray-900 text-white w-full">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="h-7">
                    <div className="space-x-4">
                        <a href="/" className="text-lg hover:text-gray-300">Home</a>
                        <a href="/user" className="text-lg hover:text-gray-300">User</a>
                        <a href="/" className="text-lg hover:text-gray-300">Services</a>
                        <a href="/" className="text-lg hover:text-gray-300">Contact</a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default LayoutHeader;
