import { makeAutoObservable, runInAction } from 'mobx';
import { RootStore } from './root';
import { ArticleInterface, SearchArticles } from '@/types/articleStore.types';
import container from '@/container/container';
import { SearchInterface } from '@/types/system.types';

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

export class ArticleStore implements SearchInterface<ArticleInterface> {
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

    async get(id: string) {
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
            throw Error;
        } finally {
            runInAction(() => {
                this.item.isLoading = false;
            });
        }
    }

    async getSearch(params: SearchArticles) {
        if (this.isLoading) return;
        runInAction(() => {
            this.list.isFetched = false;
            this.list.isLoading = true;
        });
        try {
            const { data } = await api.getSearchArticles(params);
            runInAction(() => {
                this.list.items = data.rows;
                this.list.count = data.count;
                this.list.isFetched = true;
            });
            return data;
        } catch (e) {
            throw Error;
        } finally {
            runInAction(() => {
                this.list.isLoading = false;
            });
        }
    }

    async getCategories() {
        if (this.isLoading) {
            return;
        }
        this.item.isLoading = true;
        try {
            const { data } = await api.getArticleCategories();
            return data;
        } catch (e) {
            throw Error;
        } finally {
            runInAction(() => {
                this.item.isLoading = false;
            });
        }
    }

    setRowsList(rows: ArticleInterface[], count: number) {
        runInAction(() => {
            this.list.items = rows;
            this.list.count = count;
        });
    }
}
