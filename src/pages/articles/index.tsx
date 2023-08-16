import { NextPageWithLayout } from '@/types/pages.types';
import { getStaticProps } from '@/pages/articles/[id]';
import { ReactElement } from 'react';
import DefaultLayout from '@/layouts/default';
import { InferGetStaticPropsType } from 'next';

const Articles: NextPageWithLayout<InferGetStaticPropsType<typeof getStaticProps>> = () => {
    return <>Все статьи</>;
};

Articles.getLayout = function getLayout(page: ReactElement) {
    return <DefaultLayout title={'Articles'}>{page}</DefaultLayout>;
};

export default Articles;
