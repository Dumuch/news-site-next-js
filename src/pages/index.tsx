import { NextPageWithLayout } from '@/types/Pages.types';
import { InferGetStaticPropsType } from 'next';
import { getStaticProps } from 'next/dist/build/webpack/loaders/next-route-loader/templates/pages';
import { UseServerStores } from '@/store/useServerStores';
import { ReactElement } from 'react';
import DefaultLayout from '@/layouts/default';
import { HomePage } from '@/components/pages/home';

const Home: NextPageWithLayout<InferGetStaticPropsType<typeof getStaticProps>> = ({ articles }) => {
    return <HomePage articles={articles} />;
};

export async function getStaticProps() {
    const { articleStore } = UseServerStores();
    const articles = await articleStore.getPopular();

    return {
        props: {
            articles,
        },
    };
}

Home.getLayout = function getLayout(page: ReactElement) {
    return <DefaultLayout title={'Homepage Title'}>{page}</DefaultLayout>;
};

export default Home;
