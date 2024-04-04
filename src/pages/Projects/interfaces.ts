import { GalleryItemProps } from "../../components/Gallery/interfaces";
import { Item } from "../../components/ItemList/interfaces";
import { Item as LinkItem } from "../../components/LinkList/interfaces";
import { MediaViewerProps } from "../../components/MediaViewer/interfaces";

export type ActionType = 'LINK' | 'DEFAULT';

export type ProjectOption = { icon: string; label: string, actionType: ActionType, link?: string };

export interface Project {
    id: number;
    type: 'video' | 'image';
    name: string;
    logoUrl: string;
    description: string;
    mediaUrl: string;
    mediaViewer: MediaViewerProps;
    tags: number[];
    gallery?: GalleryItemProps[];
    linksTitle?: string;
    links?: LinkItem[];
    aboutTitle?: string;
    aboutItems?: Item[];
    options: ProjectOption[];
}


export interface ProjectHeaderProps {
    projectName: string;
    logoUrl: string;
    subtitle: string;
}

export interface ProjectCardProps {
    defaultAction: () => void;
    project: Project;
}

export interface ProjectCardOptionProps {
    defaultAction: () => void;
    option: ProjectOption;
}

export interface ProjectsGalleryProps {
    children: React.ReactNode;
}