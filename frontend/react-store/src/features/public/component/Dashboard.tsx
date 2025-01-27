import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <>
            <h1>
                This is Children Content
            </h1>
            <div>
                Dashboard Page
                <p>
                    content1
                </p>
                <p>
                    content2
                </p>
            </div>
            <div>
                <button>
                    <Link to={'/login'} >Login</Link>
                </button>
            </div>
        </>
    );
};
export default Dashboard;