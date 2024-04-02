import React from 'react';
import { GalleryItem } from './components/GalleryItem';
import { GalleryProps } from './interfaces';

const Gallery: React.FC<GalleryProps> = ({ items }) => {
  return (
    <div className="overflow-auto">
      <div className={`grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4`}>
        {items.map((item, index) => (<GalleryItem key={index} {...item} />))}
      </div>
    </div>
  );
};

export default Gallery;
