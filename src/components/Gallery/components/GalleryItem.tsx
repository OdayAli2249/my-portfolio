import { useState } from "react";
import { GalleryItemProps } from "../interfaces";
import { HighlightedWordsText } from "../../HighLightedWordsText";

export const GalleryItem: React.FC<GalleryItemProps> = ({ src, type, highlightWord }) => {
    const [maximized, setMaximized] = useState(false);

    const handleClick = () => {
        setMaximized(!maximized);
    };

    return (
        <div className="relative cursor-pointer p-1 flex flex-col items-center" onClick={handleClick}>
            {type === 'image' ? (<img src={src} alt="Image" className="w-full h-[200px] object-cover rounded-md" />) :
                (<video className="w-full h-[200px] object-contain rounded-md" autoPlay loop muted>
                    <source src={src} type="video/mp4" /> Your browser does not support the video tag.
                </video>)}
            {highlightWord && (<div className="m-2 text-center"><HighlightedWordsText text={highlightWord} /></div>)}
            {maximized && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex justify-center items-center z-50"
                    onClick={handleClick}>
                    {type === 'image' ? (<div className="flex flex-col items-center justify-center">
                        <img src={src} alt="Maximized Image" className="w-[60%] h-[90%] object-contain" />
                        {highlightWord && (
                            <div className="mt-8 text-center">
                                <HighlightedWordsText text={highlightWord} lightText />
                            </div>)}</div>) : (
                        <div className="flex flex-col items-center justify-center">
                            <video className="w-[60%] h-[90%] object-contain" controls autoPlay loop muted>
                                <source src={src} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            {highlightWord && (<div className="mt-8 text-center">
                                <HighlightedWordsText text={highlightWord} lightText />
                            </div>)}
                        </div>)}
                </div>)}
        </div>
    );
};