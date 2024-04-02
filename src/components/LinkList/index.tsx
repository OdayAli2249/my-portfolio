import React from 'react';
import { HighlightedWordsText } from '../HighLightedWordsText';
import { LinkListProps } from './interfaces';

export const LinkList: React.FC<LinkListProps> = ({ title, items }) => {
  return (
    <div>
      <h2 className='font-extrabold'>{title}</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <HighlightedWordsText text={item.text} />{' '}
            - <a href={item.url} target="_blank" rel="noopener noreferrer"
              className="text-blue-500 hover:underline">
              {item.clickableText}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
