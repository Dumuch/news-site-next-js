import { AxiosPromise } from 'axios';
import { ArticleInterface, SearchArticles } from '@/types/articleStore.types';
import { FindAndCountAllInterface } from '@/types/system.types';

export abstract class AbstractApiClient {
    abstract articleGet(id: string): AxiosPromise<ArticleInterface>;
    abstract getPopularArticles(): AxiosPromise<ArticleInterface[]>;
    abstract getLatestArticles(): AxiosPromise<ArticleInterface[]>;

    abstract getSearchArticles(params?: SearchArticles): AxiosPromise<FindAndCountAllInterface<ArticleInterface[]>>;

    abstract __extendHeaders(headers: { [key: string]: string | undefined }): void;

    setAuthorizationHeader(token: string, type = 'Bearer'): void {
        this.__extendHeaders({ Authorization: `${type} ${token}` });
    }
}
