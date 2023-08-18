import { memo } from 'react';
import { TitleSectionProps } from '@/components/UI/titleSection/titleSection.types';

export const TitleSection = memo<TitleSectionProps>(({ title, children }) => {
    return (
        <div className={'section-title'}>
            <h4 className={'m-0 text-uppercase font-weight-bold'}>{title}</h4>
            {children}
        </div>
    );
});

TitleSection.displayName = 'TitleSection';
