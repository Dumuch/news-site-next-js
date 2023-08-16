import { FC, useMemo } from 'react';
import { Article } from '@/models/api/article';
import { RoutesList } from '@/RoutesList';
import Link from 'next/link';
import { GalleryItem } from '@/components/UI/gallery/gallery.types';
import { PopularArticlesSection } from '@/components/pages/home/popular';

interface props {
    articles: Article[];
}

export const HomePage: FC<props> = ({ articles }) => {
    const galleryItems = useMemo(() => {
        return articles.map((article) => ({ name: article.title, id: article.id }) as GalleryItem);
    }, [articles]);

    return (
        <div className='container-fluid pt-5 mb-3'>
            <PopularArticlesSection />
            <div className='container'>
                <ul>
                    {articles?.map((article) => {
                        return (
                            <li key={article.id}>
                                <Link href={`${RoutesList.articles}/${article.id}`}>{article.title}</Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};
