import { makeAutoObservable, runInAction } from 'mobx';
import { RootStore } from './root';
import { Article } from '@/models/api/article';
import container from '@/container/container';

const api = container.apiClient;

interface ArticleState {
    isLoading: boolean;
    isFetched: boolean;
}

interface ListArticle extends ArticleState {
    items: Article[];
    count: number;
}

interface ItemArticle extends ArticleState {
    item?: Article;
}

interface ICSData extends ArticleState {
    data: string | null;
}

interface ExternalCalendarsList extends ArticleState {
    isRemoveLoading: boolean;
    isEditLoading: boolean;
    isSyncLoading: boolean;
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

    async fetchList(limit = 30, offset = 0, field = '', order = 0) {
        if (this.isLoading) {
            return;
        }

        this.list.isLoading = true;

        try {
            // const { data } = await api.articleList({
            //     limit: limit,
            //     offset: offset,
            //     sortField: field,
            //     sortOrder: order,
            // });
            // runInAction(() => {
            //     this.list.items = data.rows;
            //     this.list.count = data.count;
            //     this.list.isFetched = true;
            // });
            // return data.rows;
        } catch (e) {
            console.log(e);
        } finally {
            runInAction(() => {
                this.list.isLoading = false;
            });
        }
    }

    async get(id: string): Promise<Article> {
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
            console.log(e);
            throw new Error();
        } finally {
            runInAction(() => {
                this.item.isLoading = false;
            });
        }
    }
}
