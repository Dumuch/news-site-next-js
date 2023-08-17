import { ArticleInterface } from '@/types/articleStore.types';
import { FC } from 'react';
import { PreviewCard } from '@/components/UI/previewCard';
import { RoutesList } from '@/RoutesList';
import { PaginationComponent } from '@/components/UI/pagination';

interface props {
    articles: ArticleInterface[];
    count: number;
}

export const ArticlesPage: FC<props> = ({ articles, count }) => {
    return (
        <div className='container-fluid pt-5 mb-3'>
            <div className='container'>
                {articles.length > 0 ? (
                    <>
                        <div className='row'>
                            {articles.map((article) => {
                                return (
                                    <div key={article.id} className={'col-md-6 col-lg-3'}>
                                        <PreviewCard {...article} href={RoutesList.articles + '/' + article.id}
                                                     photos={article.articlePhotos} />
                                    </div>
                                );
                            })}
                        </div>
                        <div className=''>
                            <PaginationComponent rowsPerPage={12} totalRecords={count} />
                        </div>
                    </>
                ) : (
                    <div className='row'>
                        <div className={'col'}><span className={'h4 m-0 text-uppercase font-weight-semi-bold'}>Not found articles</span></div>
                    </div>
                )}
            </div>
        </div>
    );
};
