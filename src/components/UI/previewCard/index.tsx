import { FC, useMemo } from 'react';
import { PreviewCardProps } from './previewCard.types';
import Link from 'next/link';
import { delimitString, getFirstImagePath, getFormatDate } from '@/utils/helpers';
import { FormatDateEnum } from '@/types/system.types';
import styles from './previewCard.module.scss';
import { ImageComponent } from '@/components/UI/image';
import { BadgeComponent } from '@/components/UI/badge';
import { RoutesList } from '@/RoutesList';

export const PreviewCard: FC<PreviewCardProps> = (item) => {
    const memoComponent = useMemo(() => {
        return (
            <div className='position-relative mb-3 h-100'>
                <div className={`d-flex flex-column ${styles.wrapperPreviewCard}`}>
                    <div className='flex-shrink-1'>

                    <ImageComponent classNameImage={`img-fluid w-100 object-fit-cover ${styles.mainImage}`}
                                    src={getFirstImagePath(item.photos)}
                                    width={500}
                                    height={500}
                                    alt={item.title} />
                    </div>

                    <div className='bg-white border border-top-0 p-4 flex-grow-1'>
                        <div className={`mb-2 ${styles.wrapperBadge}`}>
                            {item.category && (
                                <BadgeComponent className={'me-2'} title={item.category.title} href={`${RoutesList.articles}?categoryId=${item.category.id}`}/>
                            )}
                            <i className='text-body'>
                                <small
                                    className={styles.date}>{getFormatDate(item.createdAt, FormatDateEnum.monthDayYear)}</small>
                            </i>
                        </div>
                        <Link
                            href={item.href}
                            className={`h4 mb-3 text-secondary text-uppercase font-weight-bold ${styles.title}`}
                        >
                            {item.title}
                        </Link>

                        <p className='m-0'>{delimitString(item.description, 200)}</p>
                    </div>
                </div>
            </div>
        );
    }, [item]);

    return <>{memoComponent}</>;
};
