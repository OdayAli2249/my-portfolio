export interface Item {
  icon: string;
  label: string;
  id: number;
}

export interface Group {
  items: Item[];
  title: string;
}

export interface SelectableItemListProps {
  groups: Group[];
  onSelect: (item: Item) => void;
  initialSelectedItem?: number;
}
