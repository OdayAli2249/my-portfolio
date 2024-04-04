import { MediaViewerProps } from "../MediaViewer/interfaces";

export interface GalleryItemProps {
    src: string;
    type: 'image' | 'video';
    highlightWord?: string;
    tag: number;
    mediaViewer?: MediaViewerProps;
}

export interface GalleryProps {
    items: GalleryItemProps[];
}