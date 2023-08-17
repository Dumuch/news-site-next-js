import Image from 'next/image';
import { FC, useMemo } from 'react';
import { PreviewArticleProps } from './PreviewArticle.types';
import Link from 'next/link';
import { RoutesList } from '@/RoutesList';
import { delimitString, getFirstImagePath, getFormatDate } from '@/utils/helpers';
import { FormatDateEnum } from '@/types/system.types';
import styles from './PreviewArticle.module.scss';
import { ImageComponent } from '@/components/UI/image';

export const PreviewArticle: FC<PreviewArticleProps> = (article) => {
    const memoComponent = useMemo(() => {
        return (
            <div className='position-relative mb-3'>
                <ImageComponent classNameImage={`img-fluid w-100 object-fit-cover ${styles.mainImage}`}
                                src={getFirstImagePath(article.articlePhotos)}
                                width={500}
                                height={500}
                                alt={article.title} />

                <div className='bg-white border border-top-0 p-4'>
                    <div className='mb-2'>
                        {article.category && (
                            <a className='badge badge-primary text-uppercase font-weight-semi-bold p-2  me-2' href=''>
                                {article.category.title}
                            </a>
                        )}
                        <a className='text-body' href=''>
                            <small>{getFormatDate(article.createdAt, FormatDateEnum.monthDayYear)}</small>
                        </a>
                    </div>
                    <Link
                        href={`${RoutesList.articles}/${article.id}`}
                        className={`h4 mb-3 text-secondary text-uppercase font-weight-bold ${styles.title}`}
                    >
                        {article.title}
                    </Link>

                    <p className='m-0'>{delimitString(article.description, 200)}</p>
                </div>
            </div>
        );
    }, [article]);

    return <>{memoComponent}</>;
};
