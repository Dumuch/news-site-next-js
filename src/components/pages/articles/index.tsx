import { ArticleCategoryInterface, ArticleInterface } from '@/types/articleStore.types';
import { FC } from 'react';
import { PreviewCard } from '@/components/UI/previewCard';
import { RoutesList } from '@/RoutesList';
import { PaginationComponent } from '@/components/UI/pagination';
import { BadgeComponent } from '@/components/UI/badge';
import badgeStyles from '@/components/UI/badge/badge.module.scss';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { UseDetectedDevice } from '@/utils/useDetectedDevice';
import { DeviceSizeEnum } from '@/types/system.types';
import { SliderCategoriesProps } from '@/components/UI/sliderCategories';

interface props {
    articles: ArticleInterface[];
    count: number;
    categories: ArticleCategoryInterface[];
}

const SliderCategories = dynamic<SliderCategoriesProps>(() => import('@/components/UI/sliderCategories'), {
    ssr: false,
});

export const ArticlesPage: FC<props> = ({ articles, count, categories }) => {
    const router = useRouter();
    const deviceDetect = UseDetectedDevice();
    return (
        <div className="container-fluid pt-5 mb-3">
            <div className="container">
                {categories.length > 0 && (
                    <>
                        {deviceDetect === DeviceSizeEnum.desktop ? (
                            <div className="row mb-3 flex-wrap justify-content-evenly">
                                {categories.map((category) => {
                                    const isActive = router.query?.categoryId === category.id;
                                    return (
                                        <div className={'col-auto mb-3'} key={category.id}>
                                            <BadgeComponent
                                                className={`text-nowrap ${isActive && badgeStyles.active}`}
                                                title={category.title}
                                                href={`${RoutesList.articles}?categoryId=${category.id}`}
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        ) : (
                            <SliderCategories categories={categories} />
                        )}
                    </>
                )}

                {articles.length > 0 ? (
                    <>
                        <div className="row">
                            {articles.map((article) => {
                                return (
                                    <div key={article.id} className={'col-md-6 col-lg-3'}>
                                        <PreviewCard
                                            {...article}
                                            href={RoutesList.articles + '/' + article.id}
                                            photos={article.articlePhotos}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                        <div className="">
                            <PaginationComponent rowsPerPage={12} totalRecords={count} />
                        </div>
                    </>
                ) : (
                    <div className="row">
                        <div className={'col'}>
                            <span className={'h4 m-0 text-uppercase font-weight-semi-bold'}>Not found articles</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
