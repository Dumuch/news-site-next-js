'use client';
import { useContext } from 'react';
import { RootStore } from './stores/root';
import { StoreContext } from './StoreProviderClient';

export const useClientStores = (): RootStore => {
    return useContext(StoreContext);
};
