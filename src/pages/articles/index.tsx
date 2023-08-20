import { NextPageWithLayout } from '@/types/pages.types';
import { getStaticProps } from '@/pages/articles/[id]';
import { ReactElement, useState } from 'react';
import DefaultLayout from '@/layouts/default';
import { GetServerSideProps, InferGetStaticPropsType } from 'next';
import { UseServerStores } from '@/store/useServerStores';
import { ArticlesPage } from '@/components/pages/articles';
import { ArticleInterface, SearchArticles } from '@/types/articleStore.types';
import { useClientStores } from '@/store';
import { UseSearchSSR } from '@/utils/useSearchSSR';
import { FindAndCountAllInterface } from '@/types/system.types';

const Articles: NextPageWithLayout<InferGetStaticPropsType<typeof getStaticProps>> = ({
    articles,
    count,
    categories,
}) => {
    const [state, setState] = useState<FindAndCountAllInterface<ArticleInterface[]>>({ rows: articles, count });
    const { articleStore } = useClientStores();

    UseSearchSSR<ArticleInterface>(articleStore, setState, articles, count);

    return <ArticlesPage articles={state.rows} count={state.count} categories={categories} />;
};

Articles.getLayout = function getLayout(page: ReactElement) {
    return <DefaultLayout title={'Articles'}>{page}</DefaultLayout>;
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const { articleStore } = UseServerStores();
    const search = await articleStore.getSearch(query as SearchArticles);
    const categories = await articleStore.getCategories();
    return {
        props: {
            articles: search?.rows ?? [],
            count: search?.count ?? 0,
            categories: categories ?? [],
        },
    };
};

export default Articles;
