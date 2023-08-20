import { TitleSection } from '@/components/UI/titleSection';
import { PreviewCardMin } from '@/components/UI/previewCard/previewCardMin';
import { ArticleInterface } from '@/types/articleStore.types';
import { FC } from 'react';
import { RoutesList } from '@/RoutesList';
import { SliderComponent } from '@/components/UI/slider';

interface props {
    articles: ArticleInterface[];
}

const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    arrows: true,
    slidesToShow: 4,
    responsive: [
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 3,
            },
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
            },
        },
    ],
};

export const PopularArticlesSection: FC<props> = ({ articles }) => {
    return (
        <section>
            <TitleSection title={'Popular Articles'} />
            <SliderComponent settings={settings}>
                {articles.map((article) => {
                    return (
                        <PreviewCardMin
                            key={article.id}
                            id={article.id}
                            title={article.title}
                            description={article.description}
                            createdAt={article.createdAt}
                            href={RoutesList.articles + '/' + article.id}
                            photos={article.articlePhotos}
                            category={article.category}
                        />
                    );
                })}
            </SliderComponent>
        </section>
    );
};
