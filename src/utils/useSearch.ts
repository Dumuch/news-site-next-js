import { useEffect, useCallback, Dispatch, SetStateAction } from 'react';
import { useRouter } from 'next/router';
import { RootStoreType } from '@/types/rootStore.types';
import { FindAndCountAllInterface } from '@/types/system.types';
import { ParsedUrlQuery } from 'querystring';

let startClient = false;

export const UseSearch = <T = []>(
    store: RootStoreType,
    method: keyof RootStoreType,
    setState: Dispatch<SetStateAction<FindAndCountAllInterface<T>>>,
): void => {
    const router = useRouter();

    const fetchData = useCallback(async () => {
        if (typeof store[method] === 'function') {
            const result = await (store[method] as (query: ParsedUrlQuery) => Promise<FindAndCountAllInterface<T>>)(
                router.query,
            );

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
