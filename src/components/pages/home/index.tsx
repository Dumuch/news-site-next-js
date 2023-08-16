import { FC } from 'react';
import { Article } from '@/models/api/article';
import { PopularArticlesSection } from '@/components/pages/home/popularSection';
import { MastheadSection } from '@/components/pages/home/mastheadSection';

interface props {
    articles: Article[];
}

export const HomePage: FC<props> = ({ articles }) => {
    return (
        <div className="container-fluid pt-5 mb-3">
            <div className="container">
                <MastheadSection />
                <PopularArticlesSection articles={articles} />
            </div>
        </div>
    );
};
