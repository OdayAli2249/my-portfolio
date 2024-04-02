import React, { Fragment } from 'react';
import { HighlightedWordProps } from './interfaces';
import useHighLight from '../../hooks/useHighLight';

export const HighlightedWordsText: React.FC<HighlightedWordProps> = ({ text, lightText = false }) => {
    const words: string[] = text.split(' ');
    const highLightedWords = useHighLight();

    return (
        <div>
            {words.map((word, index) => {
                const lcWord = word.toLocaleLowerCase();
                const isPrimary = highLightedWords?.primary?.includes(lcWord) ?? false;
                const isSecondary = highLightedWords?.secondary?.includes(lcWord) ?? false;
                return (<Fragment key={index}>
                    <span key={index} className={isPrimary ?
                        'bg-green-200 rounded-md px-2 font-bold' : isSecondary ?
                            'bg-gray-200 rounded-md px-2 font-bold' :
                            ('font-semibold' + (lightText ? ' text-white' : ''))}>
                        {word.startsWith('#') ? word.slice(1) : word}
                    </span>{' '}
                </Fragment>
                )
            })}
        </div>
    );
};
