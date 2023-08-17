import Image from 'next/image';
import { ImageProps } from '@/components/UI/image/image.types';
import { FC, useCallback, useState } from 'react';
import { appConfig } from '@/config/app';
import styles from './image.module.scss';
import { SkeletonComponent } from '@/components/UI/skeleton';

export const ImageComponent: FC<ImageProps> = ({ src, classNameImage = '', alt = '', width, height }) => {
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const onError = useCallback(() => {
        setIsError(true);
        setIsLoading(false);
    }, [src]);

    const onLoad = useCallback(() => {
        setIsLoading(false);
    }, [src]);

    return (

        <div className={styles.wrapperImage}>
            <SkeletonComponent
                width={'100%'}
                height={'100%'}
                show={isLoading}
            />
            <Image width={width} height={height} src={isError ? appConfig.noImagePath : src} alt={alt}
                   onError={onError}
                   onLoad={onLoad}
                   className={`${classNameImage} ${styles.lazyImage} ${isLoading ? styles.loading : styles.loaded}`} />
        </div>

    );
};
