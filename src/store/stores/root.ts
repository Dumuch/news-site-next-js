import { ArticleStore } from './articleStore';

export class RootStore {
    apiUrl: string | undefined;
    articleStore: ArticleStore;

    constructor() {
        this.articleStore = new ArticleStore(this);
        this.getApiUrl();
    }

    getApiUrl() {
        this.apiUrl = process.env.NEXT_PUBLIC_REACT_APP_PROVIDERS_REMOTE_SERVER_BASE_URL;
    }
}
