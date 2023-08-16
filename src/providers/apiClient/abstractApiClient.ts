import { AxiosPromise } from 'axios';
import { Article, ArticleList } from '@/models/api/article';
import { FindAndCountAll } from '@/models/api';

export abstract class AbstractApiClient {
    abstract articleList(params?: ArticleList): AxiosPromise<FindAndCountAll<Article>>;

    abstract articleGet(id: string): AxiosPromise<Article>;
    abstract getPopularArticles(): AxiosPromise<Article[]>;
    abstract __extendHeaders(headers: { [key: string]: string | undefined }): void;

    setAuthorizationHeader(token: string, type = 'Bearer'): void {
        this.__extendHeaders({ Authorization: `${type} ${token}` });
    }
}
