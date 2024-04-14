import React from 'react';
import Contact from '../../Contact';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-gray-300 py-6">
            <div className="flex flex-col items-center">
                <Contact />
                <div className="text-sm">&copy; 2024 Oday Ali. All rights reserved.</div>
            </div>
        </footer>
    );
};

export default Footer;
