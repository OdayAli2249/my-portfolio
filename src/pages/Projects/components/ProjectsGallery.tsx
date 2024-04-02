import React from 'react';
import { ProjectsGalleryProps } from '../interfaces';

export const ProjectsGallery: React.FC<ProjectsGalleryProps> = ({ children }) => {
  return (
    <div className="overflow-auto">
      <div className={`grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-4`}>
        {children}
      </div>
    </div>
  );
};
