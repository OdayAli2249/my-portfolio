import React from 'react';
import { DialogProps } from './interfaces';

export const Dialog: React.FC<DialogProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white w-[95vw] h-[95vh] rounded-lg px-2 xs:px-2 sm:px-4 md:px-4 lg:px-10 py-4">
                <div className="flex justify-end">
                    <button onClick={onClose} className="focus:outline-none">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-gray-500 hover:text-gray-700"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className="mt-4">{children}</div>
            </div>
        </div>
    );
};
