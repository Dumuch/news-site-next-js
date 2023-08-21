import { useEffect, Dispatch, SetStateAction } from 'react';
import { FindAndCountAllInterface, SearchInterface } from '@/types/system.types';

export const UseSearchSSR = <T>(
    store: SearchInterface<T>,
    setState: Dispatch<SetStateAction<FindAndCountAllInterface<T[]>>>,
    rowsAndCount: FindAndCountAllInterface<T[]>,
): void => {
    useEffect(() => {
        store.setRowsList(rowsAndCount);
        setState(rowsAndCount);
    }, [rowsAndCount, store, setState]);
};
