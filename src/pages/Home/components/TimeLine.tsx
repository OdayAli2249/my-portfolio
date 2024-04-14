import React from 'react';
import { WorkExperience } from '../interfaces';

const Timeline: React.FC<WorkExperience> = ({ items, title }) => {
    return (
        <div className="max-w-7xl mx-auto w-full flex flex-col items-start px-2 xs:px-2 sm:px-4 md:px-8 lg:px-24">
            <h1 className="text-md xs:text-md md:text-lg lg:text-2xl font-bold text-blue-500 !leading-relaxed py-8 xs:py-8 sm:py-12 md:py-16 lg:py-16" >
                {title}
            </h1>
            <div className="w-full grid grid-cols-9">
                {items.map((item, index) => (<>
                    <div key={index} className="col-span-1 w-full h-full">
                        <div className="w-full h-full flex flex-col items-end">
                            <p className="text-gray-600 text-[10px] xs:text-[10px] sm:text-[10px] md:text-[12px] lg:text-[14px]">
                                {item.date}
                            </p>
                        </div>
                    </div>
                    <div className="relative col-span-1 w-full h-full flex justify-center items-start">
                        <div className="h-full w-1 bg-blue-300"></div>
                        <div className="absolute w-6 h-6 rounded-full bg-blue-400 z-10 text-white text-center">{index + 1}</div>
                    </div>
                    <div className="col-span-7 w-full mb-8">
                        <div className="w-full h-full pr-2 xs:pr-2 sm:pr-4 md:pr-8 lg:pr-24">
                            <div className='flex justify-between'>
                                <h1 className="font-bold text-sm xs:text-sm sm:text-md md:text-lg lg:text-xl">{item.position}</h1>
                                <h1 className="font-bold text-sm xs:text-sm sm:text-md md:text-lg lg:text-xl">{item.companyName}</h1>
                            </div>
                            <ul className="list-disc text-xs xs:text-xs sm:text-sm md:text-md lg:text-md">
                                {item.responsibilities.map((responsibility, idx) => (
                                    <li key={idx}>{responsibility}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </>))}
            </div>
        </div>
    );
};

export default Timeline;
