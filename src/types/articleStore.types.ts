import { CategoryInterface, ImageInterface, RowInterface, SearchProps } from '@/types/system.types';

export interface ArticleInterface extends RowInterface {
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
    id: string;
}

export interface SearchArticles extends SearchProps {
    [ArticleFilterNames.q]?: string;
    [ArticleFilterNames.categoryId]?: string;
}

export enum ArticleFilterNames {
    q = 'q',
    categoryId = 'categoryId',
}
