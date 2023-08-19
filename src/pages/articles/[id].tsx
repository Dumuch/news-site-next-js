import { UseServerStores } from '@/store/useServerStores';
import { ReactElement } from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { appConfig } from '@/config/app';
import { NextPageWithLayout } from '@/types/pages.types';
import { RoutesList } from '@/RoutesList';
import { ArticlesDetailsPage } from '@/components/pages/articlesDetails';
import DefaultLayoutWithSidebar from '@/layouts/default/defaultWithSidebar';

const Article: NextPageWithLayout<InferGetStaticPropsType<typeof getStaticProps>> = ({ article }) => {
    return <ArticlesDetailsPage article={article} />;
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { articleStore } = UseServerStores();
    try {
        const article = await articleStore.get(params?.id as string);
        return {
            props: {
                article,
            },
            revalidate: appConfig.revalidateStaticPropsMinutes,
        };
    } catch (e) {
        return {
            redirect: {
                destination: RoutesList.articles,
                permanent: false,
            },
        };
    }
};

export async function getStaticPaths() {
    const paths = [{ params: { id: '1' } }];

    return {
        paths,
        fallback: 'blocking',
    };
}

Article.getLayout = function getLayout(page: ReactElement) {
    return <DefaultLayoutWithSidebar title={'Homepage Title'}>{page}</DefaultLayoutWithSidebar>;
};

export default Article;
