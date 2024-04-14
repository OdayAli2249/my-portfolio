import { CarouselProps } from "../../components/Carousel/interfaces";

export interface AboutMeData {
    title: string;
    firstName: string;
    lastName: string;
    birthYear: number;
    picture: string;
    education: string[];
    expertise: string[];
    languages: string[];
    profession: string;
}

export interface WorkExperienceItem {
    companyName: string;
    position: string;
    responsibilities: string[];
    date: string;
}

export interface WorkExperience {
    title: string;
    items: WorkExperienceItem[];
}

export interface popper {
    label: string;
    content: string;
    positionContent?: "top" | "bottom";
    icon: string
};

export interface ServicesProps {
    title: string;
    headerText: string;
    subtitle: string;
    srcImage: string;
    popperLevelTop: popper[];
    popperLevelCenter: popper[];
    popperLevelBottom: popper[];
};

export interface SkillsProps {
    title: string;
    subtitle: string;
    carousel: CarouselProps
}