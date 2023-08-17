import { TitleSection } from '@/components/UI/titleSection';
import { ArticleInterface } from '@/types/articleStore.types';
import { FC } from 'react';
import { PreviewArticle } from '@/components/UI/previewArticle';

interface props {
    articles: ArticleInterface[];
}

export const LatestArticlesSection: FC<props> = ({ articles }) => {
    return (
        <section>
            <TitleSection title={'Latest Articles'} />
            <div className="row">
                {articles.map((article) => {
                    return (
                        <div key={article.id} className={'col-md-6 col-lg-4'}>
                            <PreviewArticle {...article} />
                        </div>
                    );
                })}
            </div>
        </section>
    );
};