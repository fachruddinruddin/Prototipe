import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function PageHeader() {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter(x => x);

    return (
        <div className="px-8 py-6 fixed w-[calc(100%-15rem)] left-60 bg-white z-10">
            <div className="flex items-center">
                <Link to="/dashboard" className="text-gray-500">Pages /</Link>
                {pathnames.map((name, index) => {
                    const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                    const isLast = index === pathnames.length - 1;
                    return isLast ? (
                        <span key={name} className="ml-2 font-medium">{name.charAt(0).toUpperCase() + name.slice(1)}</span>
                    ) : (
                        <Link key={name} to={routeTo} className="ml-2 text-gray-500">{name.charAt(0).toUpperCase() + name.slice(1)} /</Link>
                    );
                })}
            </div>
        </div>
    );
}

export default PageHeader;