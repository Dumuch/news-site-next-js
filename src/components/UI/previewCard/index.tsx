import { FC, useMemo } from 'react';
import { PreviewCardProps } from './previewCard.types';
import Link from 'next/link';
import { delimitString, getFirstImagePath, getFormatDate } from '@/utils/helpers';
import { FormatDateEnum } from '@/types/system.types';
import styles from './previewCard.module.scss';
import { ImageComponent } from '@/components/UI/image';

export const PreviewCard: FC<PreviewCardProps> = (item) => {
    const memoComponent = useMemo(() => {
        return (
            <div className='position-relative mb-3'>
                <ImageComponent classNameImage={`img-fluid w-100 object-fit-cover ${styles.mainImage}`}
                                src={getFirstImagePath(item.photos)}
                                width={500}
                                height={500}
                                alt={ item.title} />

                <div className='bg-white border border-top-0 p-4'>
                    <div className='mb-2'>
                        { item.category && (
                            <a className='badge badge-primary text-uppercase font-weight-semi-bold p-2  me-2' href=''>
                                { item.category.title}
                            </a>
                        )}
                        <a className='text-body' href=''>
                            <small>{getFormatDate( item.createdAt, FormatDateEnum.monthDayYear)}</small>
                        </a>
                    </div>
                    <Link
                        href={item.href}
                        className={`h4 mb-3 text-secondary text-uppercase font-weight-bold ${styles.title}`}
                    >
                        { item.title}
                    </Link>

                    <p className='m-0'>{delimitString( item.description, 200)}</p>
                </div>
            </div>
        );
    }, [ item]);

    return <>{memoComponent}</>;
};
