import styles from '../PreviewArticle.module.scss';
import { FC, useMemo } from 'react';
import { PreviewArticleProps } from '../PreviewArticle.types';
import Link from 'next/link';
import { RoutesList } from '@/RoutesList';
import { getFirstImagePath, getFormatDate } from '@/utils/helpers';
import { FormatDateEnum } from '@/types/system.types';
import { ImageComponent } from '@/components/UI/image';

export const PreviewArticleMin: FC<PreviewArticleProps> = (article) => {
    const memoComponent = useMemo(() => {
        return (
            <div className={`position-relative overflow-hidden m-2 ${styles.previewArticleMin}`}>
                <ImageComponent
                    className="img-fluid h-100 object-fit-cover"
                    src={getFirstImagePath(article.articlePhotos)}
                    width={500}
                    height={500}
                    alt={article.title}
                />

                <div className="overlay">
                    <div className="mb-2">
                        <a
                            className="badge badge-primary text-uppercase font-weight-semi-bold p-2 me-2"
                            href="@/components/UI/previewArticle/PreviewArticleMin/index"
                        >
                            Business
                        </a>
                        <a className="text-white" href="@/components/UI/previewArticle/PreviewArticleMin/index">
                            <small>{getFormatDate(article.createdAt, FormatDateEnum.monthDayYear)}</small>
                        </a>
                    </div>
                    <Link
                        href={`${RoutesList.articles}/${article.id}`}
                        className={`h6 m-0 text-white text-uppercase font-weight-semi-bold ${styles.title}`}
                    >
                        {article.title}
                    </Link>
                </div>
            </div>
        );
    }, [article]);

    return <>{memoComponent}</>;
};
