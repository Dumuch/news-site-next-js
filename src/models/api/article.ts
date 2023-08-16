import { Filtered, Sorted } from '@/models/api/index';

export interface Article {
    id: string;
    title: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
}

export interface ArticleList extends Sorted, Filtered {}
