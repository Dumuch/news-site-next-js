import { useEffect, Dispatch, SetStateAction } from 'react';
import { FindAndCountAllInterface, SearchInterface } from '@/types/system.types';

export const UseSearchSSR = <T>(
    store: SearchInterface<T>,
    setState: Dispatch<SetStateAction<FindAndCountAllInterface<T[]>>>,
    rows: T[],
    count: number,
): void => {
    useEffect(() => {
        store.setRowsList({ rows, count });
        setState({ rows, count });
    }, [rows, count, store, setState]);
};
