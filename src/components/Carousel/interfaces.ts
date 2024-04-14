
export interface Item {
    icon: string;
    label: string;
    id: number;
}

export interface CarouselItemProps {
    title: string;
    subtitle: string;
    icon: string;
    items?: number[]
}

export interface CarouselProps {
    title: string;
    items: CarouselItemProps[]
}