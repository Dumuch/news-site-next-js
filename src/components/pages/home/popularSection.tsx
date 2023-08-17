import { TitleSection } from '@/components/UI/titleSection';
import { PreviewArticleMin } from '@/components/UI/previewArticle/previewArticleMin';
import { Carousel } from 'primereact/carousel';
import { ArticleInterface } from '@/types/articleStore.types';
import { FC } from 'react';

interface props {
    articles: ArticleInterface[];
}

const responsiveOptions = [
    {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1
    },
    {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
    }
];

export const PopularArticlesSection: FC<props> = ({ articles }) => {
    return (
        <section>
            <TitleSection title={'Popular Articles'} />
            <Carousel value={articles} numVisible={4} responsiveOptions={responsiveOptions} numScroll={1} itemTemplate={PreviewArticleMin} />
        </section>
    );
};
