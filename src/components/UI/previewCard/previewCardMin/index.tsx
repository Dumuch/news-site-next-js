import styles from '../previewCard.module.scss';
import { FC, useMemo } from 'react';
import { PreviewCardProps } from '../previewCard.types';
import Link from 'next/link';
import { getFirstImagePath, getFormatDate } from '@/utils/helpers';
import { FormatDateEnum } from '@/types/system.types';
import { ImageComponent } from '@/components/UI/image';
import { BadgeComponent } from '@/components/UI/badge';
import { RoutesList } from '@/RoutesList';

export const PreviewCardMin: FC<PreviewCardProps> = ( item) => {
    const memoComponent = useMemo(() => {
        return (
            <div className={`position-relative overflow-hidden m-2 ${styles.previewCardMin}`}>
                <ImageComponent
                    className="img-fluid h-100 object-fit-cover"
                    src={getFirstImagePath( item.photos)}
                    width={500}
                    height={500}
                    alt={ item.title}
                />

                <div className="overlay">
                    <div className={`mb-2 ${styles.wrapperBadge}`}>
                        { item.category && (
                            <BadgeComponent className={'me-2'} title={item.category.title} href={`${RoutesList.articles}?categoryId=${item.category.id}`}/>
                        )}
                        <a className="text-white" href="@/components/UI/previewArticle/PreviewArticleMin/index">
                            <small className={styles.date}>{getFormatDate( item.createdAt, FormatDateEnum.monthDayYear)}</small>
                        </a>
                    </div>
                    <Link
                        href={item.href}
                        className={`h6 m-0 text-white text-uppercase font-weight-semi-bold ${styles.title}`}
                    >
                        { item.title}
                    </Link>
                </div>
            </div>
        );
    }, [ item]);

    return <>{memoComponent}</>;
};
