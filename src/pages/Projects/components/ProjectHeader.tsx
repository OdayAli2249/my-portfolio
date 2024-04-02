import React from 'react';
import { ProjectHeaderProps } from '../interfaces';

export const ProjectHeader: React.FC<ProjectHeaderProps> = ({ projectName, logoUrl, subtitle }) => (
    <div className="flex items-center mb-6">
        <div className="w-24 h-24 mr-4">
            <img src={logoUrl} alt="Project Logo" className="w-full h-full object-cover rounded-lg" />
        </div>
        <div>
            <h1 className="text-xl font-bold">{projectName}</h1>
            <p className="text-gray-500">{subtitle}</p>
        </div>
    </div>
);
