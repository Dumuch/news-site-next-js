import { FormatDateEnum, ImageInterface } from '@/types/system.types';
import format from 'date-fns/format';
import { appConfig } from '@/config/app';
import { BaseRouter } from 'next/dist/shared/lib/router/router';

export const getFirstImagePath = (images: ImageInterface[] | null) => {
    if (images && images[0]) {
        return `/assets/images/${images[0].path}`;
    }
    return appConfig.noImagePath;
};

export const getFormatDate = (date: string | Date, formatType: FormatDateEnum): string => {
    let obDate = date;
    if (typeof date === 'string') {
        obDate = new Date(date);
    }
    return format(obDate as Date, formatType);
};

export const delimitString = (str: string, limit: number) => {
    if (str.length <= limit) {
        return str;
    } else {
        return str.slice(0, limit) + '...';
    }
};

export const isActiveLink = (router: BaseRouter, currentRoute: string): boolean => {
    return router.route === currentRoute;
};
