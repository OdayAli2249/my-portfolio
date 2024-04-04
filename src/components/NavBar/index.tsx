import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavBarProps } from './interfaces';

const Navbar: React.FC<NavBarProps> = ({ tabs }: NavBarProps) => {
    return (
        <nav className="h-[60px] w-full flex flex-row items-center justify-center">
            {tabs.map(tab =>
            (<NavLink key={tab.name} to={tab.url}
                className={({ isActive }) => isActive &&
                    !(tab.name === 'Home' && window.location.pathname.split('/').length > 2) ?
                    "text-white text-bold bg-blue-400 hover:bg-blue-600 rounded-md px-2 py-1 mr-4 text-md font-semibold" :
                    "text-Blue-400 hover:bg-blue-100 hover:text-white rounded-md px-2 py-1 mr-4 text-md font-semibold"}>
                {tab.name}
            </NavLink>))}
        </nav>
    );
};

export default Navbar;
