import { FC, ReactNode } from 'react';
import { Header } from '@/layouts/default/header';
import Footer from '@/layouts/default/footer';
import Head from 'next/head';
import { Sidebar } from '@/layouts/default/defaultWithSidebar/sidebar';
import styles from '@/layouts/default/layout.module.scss';

interface Props {
    children?: ReactNode;
    title?: string;
}

const DefaultLayoutWithSidebar: FC<Props> = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta content="width=device-width, initial-scale=1.0" name="viewport" />
            </Head>
            <div className={styles.wrapperPage}>
                <Header />
                <main>
                    <div className="container-fluid pt-5 mb-3">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8">{children}</div>
                                <div className="col-lg-4">
                                    <Sidebar />
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
};

export default DefaultLayoutWithSidebar;
