import { Filtered, Sorted } from '@/models/api';
import { ImageInterface } from '@/types/system.types';

export interface ArticleStoreTypes {
    id: string;
    title: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;

    articlePhotos: ArticlePhoto[] | null;
}

export interface ArticlePhoto extends ImageInterface{
    id: string;
    name: string;
}

export interface ArticleList extends Sorted, Filtered {}
