import { AxiosPromise } from 'axios';
import { ArticleInterface, ArticleList } from '@/types/articleStore.types';
import { FindAndCountAll } from '@/models/api';

export abstract class AbstractApiClient {
    abstract articleList(params?: ArticleList): AxiosPromise<FindAndCountAll<ArticleInterface>>;

    abstract articleGet(id: string): AxiosPromise<ArticleInterface>;
    abstract getPopularArticles(): AxiosPromise<ArticleInterface[]>;
    abstract getLatestArticles(): AxiosPromise<ArticleInterface[]>;

    abstract __extendHeaders(headers: { [key: string]: string | undefined }): void;

    setAuthorizationHeader(token: string, type = 'Bearer'): void {
        this.__extendHeaders({ Authorization: `${type} ${token}` });
    }
}
