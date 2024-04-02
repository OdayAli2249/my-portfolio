import React from 'react';

interface AboutMeData {
    firstName: string;
    lastName: string;
    birthYear: number;
    picture: string;
    education: string[];
    expertise: string[];
    languages: string[];
    profession: string;
}

const BasicInfo: React.FC<{ data: AboutMeData }> = ({ data }) => {
    const { firstName, lastName, birthYear, picture, education, expertise, languages, profession } = data;

    return (
        <div className="bg-gray-100 py-16">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-start justify-start">
                    <div className="md:w-1/3 m-16">
                        <img src={picture} alt="Profile" className="rounded-lg" />
                    </div>
                    <div className="md:w-2/3">
                        <h2 className="text-2xl font-bold mb-4">{firstName} {lastName}</h2>
                        <p className="mb-4">Birth Year: {birthYear}</p>
                        <div className="mb-4">
                            <h3 className="text-lg font-bold mb-2">Profession:</h3>
                            <ul>
                                {profession}
                            </ul>
                        </div>
                        <div className="mb-4">
                            <h3 className="text-lg font-bold mb-2">Education:</h3>
                            <ul>
                                {education.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="mb-4">
                            <h3 className="text-lg font-bold mb-2">Expertise:</h3>
                            <ul>
                                {expertise.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="mb-4">
                            <h3 className="text-lg font-bold mb-2">Languages:</h3>
                            <p>{languages.join(', ')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BasicInfo;
