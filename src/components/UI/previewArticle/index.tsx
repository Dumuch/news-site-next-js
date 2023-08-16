import styles from './previewArticle.module.scss';
import Image from 'next/image';
import { FC, useMemo } from 'react';
import { PreviewArticleProps } from './previewArticle.types';
import { ArticlePhoto } from '@/models/api/article';

const imagePath = (photos: ArticlePhoto[] | null) => {
    if (photos && photos[0]) {
        return `/assets/images/${photos[0].path}`;
    }
    return '/';
};

export const PreviewArticle: FC<PreviewArticleProps> = (article) => {
    const memoComponent = useMemo(() => {
        return (
            <div className={`position-relative overflow-hidden m-2 ${styles.previewArticle}`}>
                <Image
                    className="img-fluid h-100 object-fit-cover"
                    src={imagePath(article.articlePhotos)}
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
                    <a className="h6 m-0 text-white text-uppercase font-weight-semi-bold" href="">
                        {article.title}
                    </a>
                </div>
            </div>
        );
    }, [article]);

    return <>{memoComponent}</>;
};
