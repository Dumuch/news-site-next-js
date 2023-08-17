import { ArticleInterface } from '@/types/articleStore.types';
import { FC } from 'react';
import Image from 'next/image';
import { getFirstImagePath, getFormatDate } from '@/utils/helpers';
import { FormatDateEnum } from '@/types/system.types';
import { ImageComponent } from '@/components/UI/image';

interface props {
    article: ArticleInterface;
}
export const ArticlesDetailsPage: FC<props> = ({ article }) => {
    return (
        <>
            <div className="position-relative mb-3">
                <ImageComponent
                    className="img-fluid h-100 w-100 object-fit-cover"
                    src={getFirstImagePath(article.articlePhotos)}
                    width={500}
                    height={500}
                    alt={article.title}
                />
                <article className="bg-white border border-top-0 p-4">
                    <div className="mb-3">
                        <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 me-2" href="">
                            Business
                        </a>
                        <a className="text-body" href="">
                            {getFormatDate(article.createdAt, FormatDateEnum.monthDayYear)}
                        </a>
                    </div>
                    <h1 className="mb-3 text-secondary text-uppercase font-weight-bold">{article.title}</h1>
                    <p>{article.description}</p>
                </article>
            </div>
        </>
    );
};
