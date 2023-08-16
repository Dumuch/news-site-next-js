import { UseServerStores } from '@/store/useServerStores';
import { ReactElement } from 'react';
import DefaultLayout from '@/layouts/default';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { appConfig } from '@/config/app';
import { NextPageWithLayout } from '@/types/Pages.types';
import { Article } from '@/models/api/article';
import { RoutesList } from '@/RoutesList';

const Article: NextPageWithLayout<InferGetStaticPropsType<typeof getStaticProps>> = ({
    article,
}: {
    article: Article;
}) => {
    return <div>{article.title}</div>;
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { articleStore } = UseServerStores();
    try {
        const article = await articleStore.get(params.id);
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
    return <DefaultLayout title={'Homepage Title'}>{page}</DefaultLayout>;
};

export default Article;
