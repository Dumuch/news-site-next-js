import qs from 'qs';
import { AbstractApiClient } from '../abstractApiClient';
import client from './client';
import apiRoutes from '../routes';
import { ArticleList } from '@/models/api';

export class RemoteServerApiClient extends AbstractApiClient {
    __extendHeaders(headers: { [key: string]: string | undefined }) {
        for (const key of Object.keys(headers)) {
            // @ts-ignore
            client.defaults.headers[key] = headers[key];
        }
    }

    articleList(params?: ArticleList) {
        return client.get(apiRoutes.articles.list, {
            params,
            paramsSerializer: (params) => qs.stringify(params),
        });
    }

    articlesNamesList() {
        return client.get(apiRoutes.articles.popular);
    }

    createArticle() {
        return client.get(apiRoutes.articles.list);
    }

    articleGet(id: string, isOpen: boolean) {
        return client.get(`${apiRoutes.articles.popular}`);
    }

    articleDelete(id: string) {
        return client.delete(apiRoutes.articles.popular);
    }

    articleDeletePhoto(photoId: string) {
        return client.delete(`${apiRoutes.articles.popular}`);
    }

    getPopularArticles() {
        return client.get(apiRoutes.articles.popular);
    }
}
