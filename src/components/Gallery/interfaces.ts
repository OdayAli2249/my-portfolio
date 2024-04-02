export interface GalleryItemProps {
    src: string;
    type: 'image' | 'video';
    highlightWord?: string;
    tag: number;
}

export interface GalleryProps {
    items: GalleryItemProps[];
}