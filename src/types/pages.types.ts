import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';

export type NextPageWithLayout<T = void> = NextPage<T> & {
    getLayout?: (page: ReactElement<T>) => ReactNode;
};
