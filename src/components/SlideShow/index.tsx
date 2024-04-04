import React, { useState, useEffect, useRef } from 'react';
import { SlideshowProps } from './interfaces';

const Slideshow: React.FC<SlideshowProps> = ({ images, children }) => {
    const [loadedImages, setLoadedImages] = useState<boolean[]>([]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const loadImage = (src: string, index: number) => {
            const img = new Image();
            img.src = src;
            img.onload = () => {
                setLoadedImages((prev) => {
                    const updated = [...prev];
                    updated[index] = true;
                    return updated;
                });
            };
            img.onerror = () => { };
        };

        images.forEach((src, index) => loadImage(src, index));

        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [images]);

    useEffect(() => {
        if (loadedImages.every(Boolean)) {
            timerRef.current = setInterval(() => {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
            }, 1000);
        } else {
            if (timerRef.current) clearInterval(timerRef.current);
        }

        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [images, loadedImages]);

    return (
        <div>
            {loadedImages.every(Boolean) ? (
                <img src={images[currentImageIndex]} alt="Slideshow"
                    className='w-full h-[200px] object-contain rounded-t-md cursor-pointer bg-blue-200' />
            ) : (
                <div className="w-full h-[200px] object-contain rounded-t-md cursor-pointer bg-blue-200">
                    {children}
                </div>
            )}
        </div>
    );
};

export default Slideshow;
