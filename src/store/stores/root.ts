import { ArticleStore } from './articleStore';
import container from '@/container/container';
import { RevalidateType } from '@/store/useServerStores.types';

const api = container.apiClient;

export class RootStore {
    apiUrl: string | undefined;
    articleStore: ArticleStore;

    constructor(revalidate?: RevalidateType) {
        if (revalidate) {
            api.__extendHeaders({ revalidate: revalidate.toString() });
        }
        this.articleStore = new ArticleStore(this);
        this.getApiUrl();
    }

    getApiUrl() {
        this.apiUrl = process.env.NEXT_PUBLIC_REACT_APP_PROVIDERS_REMOTE_SERVER_BASE_URL;
    }
}
