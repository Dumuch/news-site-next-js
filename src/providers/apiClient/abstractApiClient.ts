import { AxiosPromise } from 'axios';
import { ArticleList, FindAndCountAll } from '@/models/api';
import { Article } from '@/models/api/article';

export abstract class AbstractApiClient {
    abstract articleList(params?: ArticleList): AxiosPromise<FindAndCountAll>;

    abstract articlesNamesList(): AxiosPromise<{ name: string }[]>;

    abstract createArticle(): AxiosPromise<Article>;

    abstract articleGet(id: string, isOpen: boolean): AxiosPromise<Article>;
    abstract getPopularArticles(): AxiosPromise<Article[]>;
    abstract __extendHeaders(headers: { [key: string]: string | undefined }): void;

    setAuthorizationHeader(token: string, type = 'Bearer'): void {
        this.__extendHeaders({ Authorization: `${type} ${token}` });
    }
}
