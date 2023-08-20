import Slider from 'react-slick';
import { memo } from 'react';
import { SliderProps } from '@/components/UI/slider/slider.types';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from '@/components/UI/slider/slider.module.scss';

export const SliderComponent = memo<SliderProps>(({ settings, children }) => {
    return (
        <Slider {...settings} className={styles.slider}>
            {children}
        </Slider>
    );
});

SliderComponent.displayName = 'SliderComponent';
