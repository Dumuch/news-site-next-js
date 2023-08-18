import type { AppProps } from 'next/app';
import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import { RootStore } from '../store';
import { removeDevTools } from '@/utils/removeDevTools';
import NextNProgress from 'nextjs-progressbar';
import StoreProviderClient from '@/store/StoreProviderClient';
import 'primereact/resources/themes/saga-orange/theme.css';
import '@/assets/styles/globals.scss';

type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

removeDevTools();
const rootStore = new RootStore();

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
    const getLayout = Component.getLayout ?? ((page) => page);
    return (
        <>
            <StoreProviderClient store={rootStore}>
                <NextNProgress options={{ showSpinner: false }} color="var(--color-primary)" />
                {getLayout(<Component {...pageProps} />)}
            </StoreProviderClient>
        </>
    );
};

export default MyApp;
