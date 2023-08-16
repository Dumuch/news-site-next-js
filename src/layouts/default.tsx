import { FC, ReactNode } from 'react';
import Head from 'next/head';

interface Props {
    children?: ReactNode;
    title?: string;
}

const DefaultLayout: FC<Props> = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <div>
                <main>{children}</main>
            </div>
        </>
    );
};

export default DefaultLayout;
