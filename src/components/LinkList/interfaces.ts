export interface Item {
    text: string;
    url: string;
    clickableText: string;
}

export interface LinkListProps {
    title: string;
    items: Item[];
}