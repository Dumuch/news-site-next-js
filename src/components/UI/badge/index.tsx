import { FC, memo } from 'react';
import { BadgeProps } from '@/components/UI/badge/badge.types';
import Link from 'next/link';

export const BadgeComponent:FC<BadgeProps> = memo(({title, href, className = ''}) => {
    return (
        <Link href={href} className={`badge badge-primary text-uppercase font-weight-semi-bold p-2 ${className}`}>
            {title}
        </Link>
    )
})
