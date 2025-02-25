import React from 'react';
import { Link } from 'react-router-dom';

function PageHeader() {
    return (
        <div className="border-b border-gray-200 p-8">
            <div className="flex items-center">
                <Link to="/" className="text-gray-500">Pages /</Link>
                <Link to="/dashboard" className="ml-2 font-medium">Dashboard</Link>
            </div>
        </div>
    );
}

export default PageHeader;