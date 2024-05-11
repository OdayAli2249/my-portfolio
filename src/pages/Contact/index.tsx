import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaLinkedin } from 'react-icons/fa';
import { run } from './algorithm/functions';

const Contact: React.FC = () => {

  run();

  return (
    <div className="max-w-7xl mx-auto w-full flex flex-col items-start px-2 xs:px-2 sm:px-4 md:px-8 lg:px-24 mb-8">
      <h1 className="text-md xs:text-md md:text-lg lg:text-2xl font-bold text-blue-600 !leading-relaxed py-2 xs:py-2 sm:py-4 md:py-8 lg:py-16" >
        {'Contact Me'}
      </h1>
      <div className="w-full grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 gap-4">
        <div className="flex items-center">
          <FaMapMarkerAlt className="text-blue-500 mr-4" />
          <span>{`${'Damascus'}, ${'Syria'}`}</span>
        </div>

        <div className="flex items-center">
          <FaPhone className="text-blue-500 mr-4" />
          <a href={`tel:${'+963-96451523'}`}>{'+963-96451523'}</a>
        </div>

        <div className="flex items-center">
          <FaLinkedin className="text-blue-500 mr-4" />
          <a href={'https://odayali2249.github.io/my-portfolio'} target="_blank" rel="noopener noreferrer">{'Linkedin'}</a>
        </div>

        <div className="flex items-center">
          <FaEnvelope className="text-blue-500 mr-4" />
          <a href={`mailto:${'ody.ali.eng@gmail.com'}`}>{'ody.ali.eng@gmail.com'}</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
