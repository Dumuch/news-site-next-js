import { ArticleStore } from './articleStore';
import container from '@/container/container';

const api = container.apiClient;

export class RootStore {
    apiUrl: string | undefined;
    articleStore: ArticleStore;

    constructor(revalidate?) {
        if (revalidate) {
            api.__extendHeaders({ revalidate });
        }
        this.articleStore = new ArticleStore(this);
        this.getApiUrl();
    }

    getApiUrl() {
        this.apiUrl = process.env.NEXT_PUBLIC_REACT_APP_PROVIDERS_REMOTE_SERVER_BASE_URL;
    }
}
