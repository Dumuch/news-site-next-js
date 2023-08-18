import { Dispatch, SetStateAction, useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/router';
import { FindAndCountAllInterface } from '@/types/system.types';
import { RootStoreType } from '@/types/rootStore.types';

let startClient = false;

export const UseSearch = (
    store: RootStoreType,
    method: string,
    setState: Dispatch<SetStateAction<FindAndCountAllInterface>>,
): void => {
    const prevPageRef = useRef(1);
    const router = useRouter();

    const fetchData = useCallback(async () => {
        if (router.query.page === prevPageRef.current) {
            router.query.page = 1;
        } else {
            prevPageRef.current = router.query.page;
        }

        const result = await store[method](router.query);
        if (result) {
            setState(result);
        }
    }, [router.query, store, method, setState]);

    useEffect(() => {
        if (startClient) {
            fetchData();
        } else {
            startClient = true;
            prevPageRef.current = router.query.page ?? 1;
        }
    }, [fetchData, router.query.page]);
};
