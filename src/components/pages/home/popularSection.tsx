import { TitleSection } from '@/components/UI/titleSection';
import { PreviewArticleMin } from '@/components/UI/previewArticle/previewArticleMin';
import { Carousel } from 'primereact/carousel';
import { ArticleInterface } from '@/types/articleStore.types';
import { FC } from 'react';

interface props {
    articles: ArticleInterface[];
}
export const PopularArticlesSection: FC<props> = ({ articles }) => {
    return (
        <section>
            <TitleSection title={'Popular Articles'} />
            <Carousel value={articles} numVisible={3} numScroll={3} itemTemplate={PreviewArticleMin} />
        </section>
    );
};
