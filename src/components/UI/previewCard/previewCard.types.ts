import { CategoryInterface, ImageInterface } from '@/types/system.types';

export interface PreviewCardProps {
    id: string;
    title: string;
    description: string;
    createdAt: string;
    href: string;

    photos: ImageInterface[] | null;
    category: CategoryInterface | null;
}
