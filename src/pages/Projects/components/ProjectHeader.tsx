import React from 'react';
import { ProjectHeaderProps } from '../interfaces';

export const ProjectHeader: React.FC<ProjectHeaderProps> = ({ projectName, logoUrl, subtitle }) => (
    <div className="lg:flex mb-6">
        <div className="mr-4">
            <img src={logoUrl} alt="Project Logo"
                className="w-21 h-21 xs:w-21 xs:h-21 sm:w-24 sm:h-24 md:w-24 md:h-24 lg:w-24 lg:h-24 object-contain" />
        </div>
        <div className='self-center'>
            <h1 className="flex text-md xs:text-md sm:text-lg md:text-lg lg:text-xl font-bold">{projectName}</h1>
            <p className="text-sm xs:text-sm sm:text-md md:text-md lg:text-md text-gray-500">{subtitle}</p>
        </div>
    </div>
);
