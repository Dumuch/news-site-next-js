import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { FindAndCountAllInterface } from '@/types/system.types';
import { RootStoreType } from '@/types/rootStore.types';

let startClient = false;

export const UseSearch = (store: RootStoreType, method: string, setState: Dispatch<SetStateAction<FindAndCountAllInterface>>): void => {
    const prevPageRef = useRef(1);
    const router = useRouter();

    useEffect(() => {
        if (startClient) {
            if (Number(router.query.page) === prevPageRef.current) {
                router.query.page = 1;
            } else {
                prevPageRef.current= router.query.page;
            }

            store[method](router.query).then(result => {
                if (result) {
                    setState(result)
                }
            })
        } else {
            startClient = true;
            prevPageRef.current = router.query.page ?? 1
        }
    }, [router.query]);
}
