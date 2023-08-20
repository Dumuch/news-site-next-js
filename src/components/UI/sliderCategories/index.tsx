import { FC } from 'react';
import { BadgeComponent } from '@/components/UI/badge';
import badgeStyles from '@/components/UI/badge/badge.module.scss';
import { RoutesList } from '@/RoutesList';
import { useRouter } from 'next/router';
import { SliderComponent } from '@/components/UI/slider';
import { CategoryInterface } from '@/types/system.types';

export interface SliderCategoriesProps {
    categories: CategoryInterface[];
}

const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    variableWidth: true,
    arrows: false,
};
const SliderCategories: FC<SliderCategoriesProps> = ({ categories }) => {
    const router = useRouter();
    return (
        <div>
            <SliderComponent settings={settings}>
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
            </SliderComponent>
        </div>
    );
};

SliderCategories.displayName = 'SliderCategories';

export default SliderCategories;
