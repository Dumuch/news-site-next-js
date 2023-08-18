import 'primereact/skeleton/skeleton.min.css';
import styles from '@/components/UI/skeleton/skeleton.module.scss';
import { Skeleton } from 'primereact/skeleton';
import { memo } from 'react';
import { SkeletonProps } from '@/components/UI/skeleton/skeleton.types';

export const SkeletonComponent = memo<SkeletonProps>((props: SkeletonProps) => {
    const { show, className, ...restProps } = props;
    const skeletonClassName = `${className} ${styles.imageSkeleton} ${show ? styles.show : styles.hide}`;

    return <Skeleton {...restProps} className={skeletonClassName} />;
});

SkeletonComponent.displayName = 'SkeletonComponent';
