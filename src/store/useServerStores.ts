import { RootStore } from '@/store/stores/root';
import { RevalidateType } from '@/store/useServerStores.types';

export const UseServerStores = (revalidate?: RevalidateType) => new RootStore(revalidate);
