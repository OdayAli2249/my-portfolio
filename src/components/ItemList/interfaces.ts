
export interface Item {
    title: string;
    boldSentence: string;
    description: string;
    highlightWord?: string;
    tag: number;
}

export interface ItemListProps {
    title: string;
    items: Item[];
    comparator?: (a: Item, b: Item) => number;
}