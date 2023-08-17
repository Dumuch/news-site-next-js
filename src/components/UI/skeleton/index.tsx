import 'primereact/skeleton/skeleton.min.css';
import styles from '@/components/UI/skeleton/skeleton.module.scss';
import { Skeleton } from 'primereact/skeleton';
import { FC, memo } from 'react';
import { SkeletonProps } from '@/components/UI/skeleton/skeleton.types';

export const SkeletonComponent: FC<SkeletonProps> = memo((props: SkeletonProps) => {
    const { show, className, ...restProps } = props;
    const skeletonClassName = `${className} ${styles.imageSkeleton} ${show ? styles.show : styles.hide}`;

    return  <Skeleton
        {...restProps}
        className={skeletonClassName}
    />
})
