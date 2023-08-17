import qs from 'qs';
import { AbstractApiClient } from '../abstractApiClient';
import client from './client';
import apiRoutes from '../routes';
import { SearchArticles } from '@/types/articleStore.types';

export class RemoteServerApiClient extends AbstractApiClient {
    __extendHeaders(headers: { [key: string]: string | undefined }) {
        for (const key of Object.keys(headers)) {
            // @ts-ignore
            client.defaults.headers[key] = headers[key];
        }
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

    getSearchArticles(params: SearchArticles){
        return client.get(apiRoutes.articles.search, {
            params,
            paramsSerializer: (params) => qs.stringify(params),
        });
    }
}
