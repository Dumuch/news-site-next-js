import { TitleSection } from '@/components/UI/titleSection';
import { PreviewArticle } from '@/components/UI/previewArticle';
import { Carousel } from 'primereact/carousel';
import { Article } from '@/models/api/article';
import { FC } from 'react';

interface props {
    articles: Article[];
}
export const PopularArticlesSection: FC<props> = ({ articles }) => {
    return (
        <>
            <TitleSection title={'Popular Articles'} />
            <Carousel value={articles} numVisible={3} numScroll={3} itemTemplate={PreviewArticle} />
        </>
    );
};
