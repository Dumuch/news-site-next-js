import { TitleSection } from '@/components/UI/titleSection';
import { ArticleInterface } from '@/types/articleStore.types';
import { FC } from 'react';
import { PreviewCard } from '@/components/UI/previewCard';
import { RoutesList } from '@/RoutesList';
import Link from 'next/link';

interface props {
    articles: ArticleInterface[];
}

export const LatestArticlesSection: FC<props> = ({ articles }) => {
    return (
        <section>
            <TitleSection title={'Latest Articles'}><Link className={'text-secondary font-weight-medium'} href={RoutesList.articles}>View All</Link></TitleSection>
            <div className="row">
                {articles.map((article) => {
                    return (
                        <div key={article.id} className={'col-md-6 col-lg-4'}>
                            <PreviewCard {...article} href={RoutesList.articles + '/' + article.id} photos={article.articlePhotos} />
                        </div>
                    );
                })}
            </div>
        </section>
    );
};
