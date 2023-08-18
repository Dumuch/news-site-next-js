import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FC } from 'react';
import { ArticleCategoryInterface } from '@/types/articleStore.types';
import { BadgeComponent } from '@/components/UI/badge';
import badgeStyles from '@/components/UI/badge/badge.module.scss';
import { RoutesList } from '@/RoutesList';
import { useRouter } from 'next/router';

interface props {
    categories: ArticleCategoryInterface[];
}

const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    variableWidth: true,
    arrows: false,
};
const SliderCategories: FC<props> = ({ categories }) => {
    const router = useRouter();
    return (
        <div>
            <Slider {...settings}>
                {categories.map((category) => {
                    const isActive = router.query?.categoryId === category.id;
                    return (
                        <div className={'col-auto mb-3 me-2'} key={category.id}>
                            <BadgeComponent
                                className={`text-nowrap ${isActive && badgeStyles.active}`}
                                title={category.title}
                                href={`${RoutesList.articles}?categoryId=${category.id}`}
                            />
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
};

SliderCategories.displayName = 'SliderCategories';

export default SliderCategories;
