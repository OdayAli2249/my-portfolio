import React, { useState, useRef, useEffect } from 'react';
import { VideoWithFallbackProps } from './interfaces';

const Video: React.FC<VideoWithFallbackProps> = ({ src, children }) => {
    const [videoLoaded, setVideoLoaded] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const handleVideoLoad = () => {
            setVideoLoaded(true);
        };

        const videoElement = videoRef.current;

        if (videoElement) {
            videoElement.addEventListener('loadeddata', handleVideoLoad);

            return () => {
                videoElement.removeEventListener('loadeddata', handleVideoLoad);
            };
        }
    }, []);

    return (
        <div>
            <video 
                src={src}
                autoPlay
                loop
                muted
                className={`w-full h-[200px] object-contain  rounded-t-md cursor-pointer bg-blue-200 ${videoLoaded ? 'block' : 'hidden'}`}
                ref={videoRef}
            />

            <div
                className={`flex items-center justify-center w-full h-[200px] object-contain rounded-t-md cursor-pointer bg-blue-200 ${videoLoaded ? 'hidden' : 'block'
                    }`}
            >
                {children}
            </div>
        </div>
    );
};

export default Video;
