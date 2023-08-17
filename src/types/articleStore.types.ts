import { Filtered, Sorted } from '@/models/api';
import { CategoryInterface, ImageInterface } from '@/types/system.types';

export interface ArticleInterface {
    id: string;
    title: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;

    articlePhotos: ArticlePhotoInterface[] | null;
    category: ArticleCategoryInterface | null;
}

export interface ArticlePhotoInterface extends ImageInterface {
    id: string;
    name: string;
}

export interface ArticleCategoryInterface extends CategoryInterface {
}

export interface ArticleList extends Sorted, Filtered {
}

export interface SearchArticles {
    page?: number;
}
