import { ArticleInterface } from '@/types/articleStore.types';
import { FC } from 'react';
import { getFirstImagePath, getFormatDate } from '@/utils/helpers';
import { FormatDateEnum } from '@/types/system.types';
import { ImageComponent } from '@/components/UI/image';
import { BadgeComponent } from '@/components/UI/badge';
import { RoutesList } from '@/RoutesList';

interface Props {
    article: ArticleInterface;
}
export const ArticlesDetailsPage: FC<Props> = ({ article }) => {
    return (
        <>
            <div className="position-relative mb-3">
                <ImageComponent
                    classNameImage="img-fluid h-100 w-100 object-fit-cover"
                    src={getFirstImagePath(article.articlePhotos)}
                    width={500}
                    height={500}
                    alt={article.title}
                />
                <article className="bg-white border border-top-0 p-4">
                    <div className="mb-3">
                        {article.category && (
                            <BadgeComponent
                                className={'me-2'}
                                title={article.category.title}
                                href={`${RoutesList.articles}?categoryId=${article.category.id}`}
                            />
                        )}
                        <a className="text-body" href="">
                            {getFormatDate(article.createdAt, FormatDateEnum.monthDayYear)}
                        </a>
                    </div>
                    <h1 className="mb-3 text-secondary text-uppercase font-weight-bold text-break">{article.title}</h1>
                    <p>{article.description}</p>
                </article>
            </div>
        </>
    );
};
