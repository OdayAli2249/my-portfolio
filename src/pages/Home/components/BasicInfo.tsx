import React from 'react';
import { AboutMeData } from '../interfaces';

const BasicInfo: React.FC<{ data: AboutMeData }> = ({ data }) => {
    const { firstName, lastName, birthYear, picture, education, expertise, languages, profession, title } = data;

    return (
        <div className="max-w-7xl mx-auto w-full flex flex-col items-start px-2 xs:px-2 sm:px-4 md:px-8 lg:px-24">
            <h1 className="text-md xs:text-md md:text-lg lg:text-2xl font-bold text-blue-500 !leading-relaxed py-8 xs:py-8 sm:py-12 md:py-16 lg:py-16" >
                {title}
            </h1>
            <div className="flex flex-col md:flex-row items-start justify-start">
                <div className="md:w-1/3 mx-16 mb-8">
                    <img src={picture} alt="Profile" className="rounded-lg" />
                </div>
                <div className="md:w-2/3">
                    <h2 className="font-bold text-sm xs:text-sm sm:text-md md:text-lg lg:text-xl">{firstName} {lastName}</h2>
                    <p className="mb-4">Birth Year: {birthYear}</p>
                    <div className="mb-4">
                        <h3 className="font-bold text-sm xs:text-sm sm:text-md md:text-lg lg:text-xl">Profession:</h3>
                        <ul className='text-xs xs:text-xs sm:text-sm md:text-md lg:text-md'>
                            {profession}
                        </ul>
                    </div>
                    <div className="mb-4">
                        <h3 className="font-bold text-sm xs:text-sm sm:text-md md:text-lg lg:text-xl">Education:</h3>
                        <ul className='text-xs xs:text-xs sm:text-sm md:text-md lg:text-md'>
                            {education.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="mb-4">
                        <h3 className="font-bold text-sm xs:text-sm sm:text-md md:text-lg lg:text-xl">Expertise:</h3>
                        <ul className='text-xs xs:text-xs sm:text-sm md:text-md lg:text-md'>
                            {expertise.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="mb-4">
                        <h3 className="font-bold text-sm xs:text-sm sm:text-md md:text-lg lg:text-xl">Languages:</h3>
                        <p className='text-xs xs:text-xs sm:text-sm md:text-md lg:text-md'>{languages.join(', ')}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BasicInfo;
