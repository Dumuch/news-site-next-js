import { FC, ReactNode } from 'react';
import Head from 'next/head';
import { Header } from '@/layouts/default/header';
import Footer from '@/layouts/default/footer';
import styles from '@/layouts/default/layout.module.scss';

interface Props {
    children?: ReactNode;
    title?: string;
}

const DefaultLayout: FC<Props> = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta content="width=device-width, initial-scale=1.0" name="viewport" />
            </Head>
            <div className={styles.wrapperPage}>
                <Header />
                <main>{children}</main>
                <Footer />
            </div>
        </>
    );
};

export default DefaultLayout;
