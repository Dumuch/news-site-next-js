import { Filtered, Sorted } from '@/models/api/index';

export interface Article {
    id: string;
    title: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;

    articlePhotos: ArticlePhoto[] | null;
}

export interface ArticlePhoto {
    id: string;
    name: string;
    path: string;
}

export interface ArticleList extends Sorted, Filtered {}
