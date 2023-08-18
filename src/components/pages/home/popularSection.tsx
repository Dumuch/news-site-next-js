import { TitleSection } from '@/components/UI/titleSection';
import { PreviewCardMin } from '@/components/UI/previewCard/previewCardMin';
import { Carousel } from 'primereact/carousel';
import { ArticleInterface } from '@/types/articleStore.types';
import { FC, useMemo } from 'react';
import { PreviewCardProps } from '@/components/UI/previewCard/previewCard.types';
import { RoutesList } from '@/RoutesList';

interface props {
    articles: ArticleInterface[];
}

const responsiveOptions = [
    {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1,
    },
    {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1,
    },
    {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1,
    },
];

export const PopularArticlesSection: FC<props> = ({ articles }) => {
    const arrayFoCarousel = useMemo(() => {
        return articles.map((article) => {
            return {
                ...article,
                photos: article.articlePhotos,
                href: RoutesList.articles + '/' + article.id,
            } as PreviewCardProps;
        });
    }, [articles]);
    return (
        <section>
            <TitleSection title={'Popular Articles'} />
            <Carousel
                value={arrayFoCarousel}
                numVisible={4}
                responsiveOptions={responsiveOptions}
                numScroll={1}
                itemTemplate={PreviewCardMin}
            />
        </section>
    );
};
