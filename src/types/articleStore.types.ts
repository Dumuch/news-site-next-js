import { Filtered, Sorted } from '@/models/api';
import { ImageInterface } from '@/types/system.types';

export interface ArticleInterface {
    id: string;
    title: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;

    articlePhotos: ArticlePhotoInterface[] | null;
}

export interface ArticlePhotoInterface extends ImageInterface {
    id: string;
    name: string;
}

export interface ArticleList extends Sorted, Filtered {}
