import { NextPageWithLayout } from '@/types/Pages.types';
import { InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import { RoutesList } from '@/RoutesList';
import { getStaticProps } from 'next/dist/build/webpack/loaders/next-route-loader/templates/pages';
import { UseServerStores } from '@/store/useServerStores';
import { ReactElement } from 'react';
import DefaultLayout from '@/layouts/default';

const Home: NextPageWithLayout<InferGetStaticPropsType<typeof getStaticProps>> = ({ articles }) => {
    return (
        <main>
            <ul>
                {articles?.map((article) => {
                    return (
                        <li key={article.id}>
                            <Link href={`${RoutesList.articles}/${article.id}`}>{article.title}</Link>
                        </li>
                    );
                })}
            </ul>
        </main>
    );
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
