import 'primereact/skeleton/skeleton.min.css';
import styles from '@/components/UI/skeleton/skeleton.module.scss';
import { Skeleton } from 'primereact/skeleton';
import { FC, memo } from 'react';
import { SkeletonProps } from '@/components/UI/skeleton/skeleton.types';

export const SkeletonComponent: FC<SkeletonProps> = memo((props) => {
    return  <Skeleton
        {...props}
        className={`${props.className} ${styles.imageSkeleton} ${props.show ? styles.show : styles.hide}`}
    />
})
