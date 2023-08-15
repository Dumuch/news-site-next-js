'use client';

import React, { createContext } from 'react';
import { RootStore } from './stores/root';

export const StoreContext = createContext<RootStore>({} as RootStore);

interface Props {
    store: RootStore;
    children: React.ReactNode;
}

const StoreProviderClient: React.FC<Props> = ({ store, children }) => {
    return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};

export default StoreProviderClient;
