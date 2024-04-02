import React from 'react';

export interface TimelineEvent {
    date: string;
    title: string;
    subtitle: string;
}

const Timeline: React.FC<{ events: TimelineEvent[] }> = ({ events }) => {
    return (
        <div className="max-w-7xl mx-auto w-full grid grid-cols-9 px-2 py-32">
            <div className="col-span-2 w-full h-full ">
                <div className="w-full h-full flex flex-col items-end">
                    <h1 className="text-black text-xl font-medium">Title</h1>
                    <p className="text-gray-600 sm:text-sm text-xs">Lorem ipsum dolor sit</p>
                </div>
            </div>
            <div className="relative col-span-1 w-full h-full flex justify-center items-start">
                <div className="h-full w-1 bg-indigo-300"></div>
                <div className="absolute w-6 h-6 rounded-full bg-indigo-400 z-10 text-white text-center">1</div>
            </div>
            <div className="col-span-6 w-full mb-8">
                <div className="w-full h-full bg-indigo-400 rounded-md px-2 pb-2 md:pl-4">
                    <h1 className="text-white text-xl font-medium">Title</h1>
                    <p className="text-gray-100 sm:text-sm text-xs">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt corporis consequuntur voluptate nulla iusto quam ut quasi, eaque quas omnis vero totam ullam, reprehenderit ratione pariatur accusamus suscipit odit nostrum?</p>
                </div>
            </div>

            <div className="col-span-2 w-full h-full ">
                <div className="w-full h-full flex flex-col items-end">
                    <h1 className="text-black text-xl font-medium">Title</h1>
                    <p className="text-gray-600 sm:text-sm text-xs">Lorem ipsum dolor sit</p>
                </div>
            </div>
            <div className="relative col-span-1 w-full h-full flex justify-center items-start">
                <div className="h-full w-1 bg-indigo-300"></div>
                <div className="absolute w-6 h-6 rounded-full bg-indigo-400 z-10 text-white text-center">1</div>
            </div>
            <div className="col-span-6 w-full mb-8">
                <div className="w-full h-full bg-indigo-400 rounded-md px-2 pb-2 md:pl-4">
                    <h1 className="text-white text-xl font-medium">Title</h1>
                    <p className="text-gray-100 sm:text-sm text-xs">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt corporis consequuntur voluptate nulla iusto quam ut quasi, eaque quas omnis vero totam ullam, reprehenderit ratione pariatur accusamus suscipit odit nostrum?</p>
                </div>
            </div>

            <div className="col-span-2 w-full h-full ">
                <div className="w-full h-full flex flex-col items-end">
                    <h1 className="text-black text-xl font-medium">Title</h1>
                    <p className="text-gray-600 sm:text-sm text-xs">Lorem ipsum dolor sit</p>
                </div>
            </div>
            <div className="relative col-span-1 w-full h-full flex justify-center items-start">
                <div className="h-full w-1 bg-indigo-300"></div>
                <div className="absolute w-6 h-6 rounded-full bg-indigo-400 z-10 text-white text-center">1</div>
            </div>
            <div className="col-span-6 w-full mb-8">
                <div className="w-full h-full bg-indigo-400 rounded-md px-2 pb-2 md:pl-4">
                    <h1 className="text-white text-xl font-medium">Title</h1>
                    <p className="text-gray-100 sm:text-sm text-xs">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt corporis consequuntur voluptate nulla iusto quam ut quasi, eaque quas omnis vero totam ullam, reprehenderit ratione pariatur accusamus suscipit odit nostrum?</p>
                </div>
            </div>

        </div>

    );
};

export default Timeline;
