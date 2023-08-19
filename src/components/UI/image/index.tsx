import Image from 'next/image';
import { ImageProps } from '@/components/UI/image/image.types';
import { memo, useCallback, useState } from 'react';
import { appConfig } from '@/config/app';
import styles from './image.module.scss';
import { SkeletonComponent } from '@/components/UI/skeleton';

export const ImageComponent = memo<ImageProps>(({ src, classNameImage = '', alt = '', width, height }) => {
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const onError = useCallback(() => {
        setIsError(true);
        setIsLoading(false);
    }, []);

    const onLoad = useCallback(() => {
        setIsLoading(false);
    }, []);

    return (
        <div className={styles.wrapperImage}>
            <SkeletonComponent width={'100%'} height={'100%'} show={isLoading} />
            <Image
                width={width}
                height={height}
                src={isError ? appConfig.noImagePath : src || appConfig.noImagePath}
                alt={alt || ''}
                onError={onError}
                onLoad={onLoad}
                className={`${classNameImage} ${styles.lazyImage} ${isLoading ? styles.loading : styles.loaded}`}
            />
        </div>
    );
});

ImageComponent.displayName = 'ImageComponent';
