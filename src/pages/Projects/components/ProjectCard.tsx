import React, { useState } from 'react';
import { ProjectCardProps } from '../interfaces';
import { ProjectsCardOption } from './ProjectCardOption';

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, defaultAction }) => {
    const [maximized, setMaximized] = useState(false);
    const handleClick = (event: any) => {event.stopPropagation(); setMaximized(!maximized); };

    return (
        <div className="bg-white rounded-lg shadow-md">
            {project.type === 'video' ? (
                <video className="w-full h-[200px] object-contain rounded-t-lg cursor-pointer bg-blue-200"
                    autoPlay loop muted onClick={handleClick}>
                    <source src={project.mediaUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>) : (<img className="w-full h-[200px] object-cover rounded-t-lg cursor-pointer"
                    src={project.mediaUrl} alt="Card Media" onClick={handleClick} />)}
            <div className="mt-2 flex justify-center">
                {project.options.map((option, index) =>
                    (<ProjectsCardOption key={index} option={option} defaultAction={defaultAction} />))}
            </div>
            {maximized && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center z-50"
                    onClick={handleClick}>
                    {project.type === 'image' ? (<img src={project.mediaUrl} alt="Maximized Image" className="max-h-full max-w-full" />) :
                        (<video className="w-[60%] h-[90%] object-contain" autoPlay loop muted>
                            <source src={project.mediaUrl} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>)}
                </div>)}
        </div>
    );
}