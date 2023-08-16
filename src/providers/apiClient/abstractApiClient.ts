import { AxiosPromise } from 'axios';
import { ArticleStoreTypes, ArticleList } from '@/types/articleStore.types';
import { FindAndCountAll } from '@/models/api';

export abstract class AbstractApiClient {
    abstract articleList(params?: ArticleList): AxiosPromise<FindAndCountAll<ArticleStoreTypes>>;

    abstract articleGet(id: string): AxiosPromise<ArticleStoreTypes>;
    abstract getPopularArticles(): AxiosPromise<ArticleStoreTypes[]>;
    abstract __extendHeaders(headers: { [key: string]: string | undefined }): void;

    setAuthorizationHeader(token: string, type = 'Bearer'): void {
        this.__extendHeaders({ Authorization: `${type} ${token}` });
    }
}
