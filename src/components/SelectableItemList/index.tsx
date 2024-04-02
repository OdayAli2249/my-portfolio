// src/components/SelectableItemList.tsx

import React, { useState, useEffect } from 'react';
import { Group, SelectableItemListProps, Item } from './interfaces';

const SelectableItemList: React.FC<SelectableItemListProps> = ({ groups, onSelect, initialSelectedItem }) => {
  const [selectedItem, setSelectedItem] = useState<number | null>(initialSelectedItem || null);

  useEffect(() => {
    if (initialSelectedItem) {
      setSelectedItem(initialSelectedItem);
    }
  }, [initialSelectedItem]);

  const handleItemClick = (item: Item) => {
    setSelectedItem(item.id);
    onSelect(item);
  };

  return (
    <div className="w-full flex flex-col gap-4 px-4">
      {groups.filter(group => group.items.length > 0).map((group, index) => (
        <div key={index}>
          <h2 className="text-lg font-semibold mb-2">{group.title}</h2>
          <div className="flex flex-wrap gap-2">
            {group.items.map((item, itemIndex) => (
              <div
                key={itemIndex}
                onClick={() => handleItemClick(item)}
                className={`cursor-pointer p-1 rounded-lg bg-gray-200 flex items-center ${selectedItem === item.id ? 'bg-green-400 text-white' : 'text-gray-700'
                  }`}
              >
                <img src={item.icon} width={24} height={24} alt='' />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SelectableItemList;
