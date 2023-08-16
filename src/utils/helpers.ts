import { FormatDateEnum, ImageInterface } from '@/types/system.types';
import format from 'date-fns/format';

export const getFirstImagePath = (images: ImageInterface[] | null) => {
    if (images && images[0]) {
        return `/assets/images/${images[0].path}`;
    }
    return '/';
};

export const getFormatDate = (date: string | Date, formatType: FormatDateEnum) => {
    let obDate = date;
    if (typeof date === 'string') {
        obDate = new Date(date);
    }
    return format(obDate, formatType);

};
