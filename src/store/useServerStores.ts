import { RootStore } from '@/store/stores/root';

export const UseServerStores = (revalidate: number | false | 0 = 0) => new RootStore(revalidate);
