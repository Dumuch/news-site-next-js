import { NextPageWithLayout } from '@/types/pages.types';
import { getStaticProps } from '@/pages/articles/[id]';
import { ReactElement, useState } from 'react';
import DefaultLayout from '@/layouts/default';
import { GetServerSideProps, InferGetStaticPropsType } from 'next';
import { UseServerStores } from '@/store/useServerStores';
import { ArticlesPage } from '@/components/pages/articles';
import { ArticleInterface } from '@/types/articleStore.types';
import { useClientStores } from '@/store';
import { UseSearch } from '@/utils/useSearch';
import { FindAndCountAllInterface } from '@/types/system.types';

const Articles: NextPageWithLayout<InferGetStaticPropsType<typeof getStaticProps>> = ({ articles, count }) => {
    const [state, setState] = useState<FindAndCountAllInterface<ArticleInterface[]>>({ rows: articles, count });
    const { articleStore } = useClientStores();

    UseSearch(articleStore, 'getSearch', setState)

    return <ArticlesPage articles={state.rows} count={state.count} />;
};

Articles.getLayout = function getLayout(page: ReactElement) {
    return <DefaultLayout title={'Articles'}>{page}</DefaultLayout>;
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const { articleStore } = UseServerStores();
    try {
        const search = await articleStore.getSearch(query);
        if (!search?.rows) {
            throw Error;
        }
        return {
            props: {
                articles: search.rows,
                count: search.count
            }
        };
    } catch {
        return {
            props: {
                articles: [],
                count: 0
            }
        };
    }
};

export default Articles;
