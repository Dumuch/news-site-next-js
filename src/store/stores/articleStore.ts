import { makeAutoObservable, runInAction } from 'mobx';
import { RootStore } from './root';
import { ArticleInterface } from '@/types/articleStore.types';
import container from '@/container/container';

const api = container.apiClient;

interface ArticleState {
    isLoading: boolean;
    isFetched: boolean;
}

interface ListArticle extends ArticleState {
    items: ArticleInterface[];
    count: number;
}

interface ItemArticle extends ArticleState {
    item?: ArticleInterface;
}

export class ArticleStore {
    list: ListArticle = {
        items: [],
        isLoading: false,
        isFetched: false,
        count: 0,
    };

    item: ItemArticle = {
        isLoading: false,
        isFetched: false,
    };

    rootStore: RootStore | undefined;

    constructor(rootStore?: RootStore) {
        makeAutoObservable(this);
        if (rootStore) {
            this.rootStore = rootStore;
        }
    }

    get isLoading() {
        return this.list.isLoading || this.item.isLoading;
    }

    async get(id: string): Promise<ArticleInterface> {
        if (this.isLoading) {
            return;
        }
        this.item.isLoading = true;
        this.item.isFetched = false;
        try {
            const { data } = await api.articleGet(id);

            runInAction(() => {
                this.item.item = data;
            });
            return data;
        } catch (e) {
            throw new Error();
        } finally {
            runInAction(() => {
                this.item.isLoading = false;
                this.item.isFetched = true;
            });
        }
    }

    async getPopular() {
        if (this.isLoading) {
            return;
        }
        this.item.isLoading = true;
        try {
            const { data } = await api.getPopularArticles();
            return data;
        } catch (e) {
            throw new Error();
        } finally {
            runInAction(() => {
                this.item.isLoading = false;
            });
        }
    }

    async getLatest() {
        if (this.isLoading) {
            return;
        }
        this.item.isLoading = true;
        try {
            const { data } = await api.getLatestArticles();
            return data;
        } catch (e) {
            throw new Error();
        } finally {
            runInAction(() => {
                this.item.isLoading = false;
            });
        }
    }
}
