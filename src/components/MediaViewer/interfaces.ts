
export type MediaViewType = 'APV' | 'SS' | 'V'

export interface MediaViewerProps {
    video?: string;
    images?: string[];
    image: string;
    mediaViewType: MediaViewType;
}