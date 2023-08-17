import { NextPageWithLayout } from '@/types/pages.types';
import { getStaticProps } from '@/pages/articles/[id]';
import { ReactElement, useEffect, useState } from 'react';
import DefaultLayout from '@/layouts/default';
import { GetServerSideProps, InferGetStaticPropsType } from 'next';
import { UseServerStores } from '@/store/useServerStores';
import { ArticlesPage } from '@/components/pages/articles';
import { useRouter } from 'next/router';
import { ArticleInterface } from '@/types/articleStore.types';
import { useClientStores } from '@/store';

let startClient = false;
const Articles: NextPageWithLayout<InferGetStaticPropsType<typeof getStaticProps>> = ({ articles, count }) => {
    const [state, setState] = useState<{ articles: ArticleInterface[], count: number }>({ articles, count });
    const router = useRouter();
    const { articleStore } = useClientStores();
    useEffect(() => {
        if (startClient) {
            articleStore.getSearch(router.query).then(result => {
                setState({ articles: result?.rows ?? [], count: result?.count ?? 0 });
            });
        } else {
            startClient = true;
        }
    }, [router.query.page]);

    return <ArticlesPage articles={state.articles} count={state.count} />;
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
