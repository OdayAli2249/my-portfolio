import React from 'react';
import { HighlightedWordsText } from '../HighLightedWordsText';
import { ItemListProps } from './interfaces';

export const ItemList: React.FC<ItemListProps> = ({ title, items, comparator }) => {
    return (
        <div>
            <h2 className='font-extrabold'>{title}</h2>
            <dl className="mb-4">
                {items.sort(comparator).map((item, index) => (
                    <div key={index}>
                        <dt className="font-bold">{item.title}</dt>
                        <dd>
                            <HighlightedWordsText text={item.description} />
                        </dd>
                    </div>
                ))}
            </dl>
        </div>
    );
};
