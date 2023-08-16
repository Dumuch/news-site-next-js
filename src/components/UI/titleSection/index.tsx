import { FC } from 'react';
import { TitleSectionProps } from '@/components/UI/titleSection/titleSection.types';

export const TitleSection: FC<TitleSectionProps> = ({ title, children }) => {
    return (
        <div className={'section-title'}>
            <h4 className={'m-0 text-uppercase font-weight-bold'}>{title}</h4>
            {children}
        </div>
    );
};
