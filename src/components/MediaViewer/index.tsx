import React, { useState, useRef, useEffect } from 'react';
import { MediaViewerProps } from './interfaces';
import Slideshow from '../SlideShow';
import Video from '../Video';

const MediaViewer: React.FC<MediaViewerProps> = ({ video, images, image, mediaViewType }) => {
    if (!!video && !!images && mediaViewType === 'APV')
        return (
            <Video src={video}>
                <Slideshow images={images}>
                    <img src={image} alt='' className='' />
                </Slideshow>
            </Video>
        );

    if (!!images && mediaViewType === 'SS')
        return (
            <Slideshow images={images}>
                <img src={image} alt='' className='w-full h-[200px] object-contain  rounded-t-md cursor-pointer bg-blue-200' />
            </Slideshow>
        );

    return <img src={image} alt='' className='w-full h-[200px] object-contain  rounded-t-md cursor-pointer bg-blue-200' />
};

export default MediaViewer;
