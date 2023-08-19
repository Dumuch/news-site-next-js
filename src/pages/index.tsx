import { NextPageWithLayout } from '@/types/pages.types';
import { InferGetStaticPropsType } from 'next';
import { UseServerStores } from '@/store/useServerStores';
import { ReactElement } from 'react';
import DefaultLayout from '@/layouts/default';
import { HomePage } from '@/components/pages/home';

const Home: NextPageWithLayout<InferGetStaticPropsType<typeof getStaticProps>> = ({
    popularArticles,
    latestArticles,
}) => {
    return <HomePage popularArticles={popularArticles ?? []} latestArticles={latestArticles ?? []} />;
};

export async function getStaticProps() {
    const { articleStore } = UseServerStores();
    const popularArticles = await articleStore.getPopular();
    const latestArticles = await articleStore.getLatest();

    return {
        props: {
            popularArticles,
            latestArticles,
        },
    };
}

Home.getLayout = function getLayout(page: ReactElement) {
    return <DefaultLayout title={'Homepage Title'}>{page}</DefaultLayout>;
};

export default Home;
