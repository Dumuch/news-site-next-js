import { useEffect, useCallback, Dispatch, SetStateAction } from 'react';
import { useRouter } from 'next/router';
import { RootStoreType } from '@/types/rootStore.types';
import { FindAndCountAllInterface } from '@/types/system.types';

let startClient = false;

export const UseSearch = <T = []>(
    store: RootStoreType,
    method: string,
    setState: Dispatch<SetStateAction<FindAndCountAllInterface<T>>>,
): void => {
    const router = useRouter();

    const fetchData = useCallback(async () => {
        if (method in store) {
            //@ts-ignore
            const result = await store[method](router.query);
            if (result) {
                setState(result);
            }
        }
    }, [router.query, store, method, setState]);

    useEffect(() => {
        if (startClient) {
            fetchData();
        } else {
            startClient = true;
        }
    }, [fetchData, router.query.page]);
};
