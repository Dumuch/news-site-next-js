import styles from './previewArticle.module.scss';
import Image from 'next/image';
import { FC, useMemo } from 'react';
import { PreviewArticleProps } from './previewArticle.types';
import Link from 'next/link';
import { RoutesList } from '@/RoutesList';
import { getFirstImagePath } from '@/utils/helpers';

export const PreviewArticle: FC<PreviewArticleProps> = (article) => {
    const memoComponent = useMemo(() => {
        return (
            <div className={`position-relative overflow-hidden m-2 ${styles.previewArticle}`}>
                <Image
                    className="img-fluid h-100 object-fit-cover"
                    src={getFirstImagePath(article.articlePhotos)}
                    width={500}
                    height={500}
                    alt="Picture of the author"
                />
                <div className="overlay">
                    <div className="mb-2">
                        <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 me-2" href="">
                            Business
                        </a>
                        <a className="text-white" href="">
                            <small>{article.createdAt}</small>
                        </a>
                    </div>
                    <Link
                        href={`${RoutesList.articles}/${article.id}`}
                        className="h6 m-0 text-white text-uppercase font-weight-semi-bold"
                    >
                        {article.title}
                    </Link>
                </div>
            </div>
        );
    }, [article]);

    return <>{memoComponent}</>;
};
