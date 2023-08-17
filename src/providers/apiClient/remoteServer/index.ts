import qs from 'qs';
import { AbstractApiClient } from '../abstractApiClient';
import client from './client';
import apiRoutes from '../routes';
import { ArticleList } from '@/types/articleStore.types';

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

    articleGet(id: string) {
        return client.get(`${apiRoutes.articles.list}/${id}`);
    }

    getPopularArticles() {
        return client.get(apiRoutes.articles.popular);
    }

    getLatestArticles() {
        return client.get(apiRoutes.articles.latest);
    }
}
