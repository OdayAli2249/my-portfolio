import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaLinkedin } from 'react-icons/fa';

const Contact: React.FC = () => {
  return (
    <div className="bg-gray-100 p-8 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>

      <div className="flex flex-col space-y-4">
        <div className="flex items-center space-x-4">
          <FaMapMarkerAlt className="text-gray-600" />
          <span>{`${'Jumraya'}, ${'Damascus'}, ${'Syria'}`}</span>
        </div>

        <div className="flex items-center space-x-4">
          <FaEnvelope className="text-gray-600" />
          <a href={`mailto:${'ody.ali.eng@gmail.com'}`}>{'ody.ali.eng@gmail.com'}</a>
        </div>

        <div className="flex items-center space-x-4">
          <FaPhone className="text-gray-600" />
          <a href={`tel:${'+963-96451523'}`}>{'+963-96451523'}</a>
        </div>

        <div className="flex items-center space-x-4">
          <FaLinkedin className="text-gray-600" />
          <a href={'https://odayali2249.github.io/my-portfolio'} target="_blank" rel="noopener noreferrer">{'Linkedin'}</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
