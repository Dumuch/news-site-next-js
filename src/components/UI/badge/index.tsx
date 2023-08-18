import { memo } from 'react';
import { BadgeProps } from '@/components/UI/badge/badge.types';
import Link from 'next/link';
import styles from '@/components/UI/badge/badge.module.scss';

export const BadgeComponent = memo<BadgeProps>(({ title, href, className = '' }) => {
    return (
        <Link href={href} className={`${styles.badge} ${styles.badgePrimary} text-uppercase font-weight-semi-bold p-2 ${className}`}>
            {title}
        </Link>
    );
});
BadgeComponent.displayName = 'BadgeComponent';
