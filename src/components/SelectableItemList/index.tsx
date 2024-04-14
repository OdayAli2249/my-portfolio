import React, { useState, useEffect } from 'react';
import { SelectableItemListProps, Item } from './interfaces';

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
          <h2 className="text-lg font-bold mb-2 text-gray-600">{group.title}</h2>
          <div className="flex flex-wrap gap-2">
            {group.items.map((item, itemIndex) => (
              <div
                key={itemIndex}
                onClick={() => handleItemClick(item)}
                className={`cursor-pointer px-2 py-1 rounded-lg flex items-center ${selectedItem === item.id ? 'bg-blue-300 font-semibold' : 'bg-gray-200'
                  }`}
              >
                {/* <img src={item.icon} width={24} height={24} alt='' /> */}
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
