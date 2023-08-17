import { FC } from 'react';
import { ArticleInterface } from '@/types/articleStore.types';
import { PopularArticlesSection } from '@/components/pages/home/popularSection';
import { MastheadSection } from '@/components/pages/home/mastheadSection';
import { LatestArticlesSection } from '@/components/pages/home/latestSection';

interface props {
    popularArticles: ArticleInterface[];
    latestArticles: ArticleInterface[];
}

export const HomePage: FC<props> = ({ popularArticles, latestArticles }) => {
    return (
        <div className="container-fluid pt-5 mb-3">
            <div className="container">
                <MastheadSection />
                <PopularArticlesSection articles={popularArticles} />
                <LatestArticlesSection articles={latestArticles} />
            </div>
        </div>
    );
};
