export interface ImageInterface {
    path: string;
}

export interface CategoryInterface {
    id: string;
    title: string;
}

export interface Sorted {
    offset?: number;
    limit?: number;
    sortField?: string | null;
    sortOrder?: number | null;
}

export interface Filtered {
    filter?: {
        column: string[];
    };
}

export interface FindAndCountAllInterface<T = []> {
    count: number;
    rows: T;
}

export enum FormatDateEnum {
    monthDayYear = 'PP',
}

export interface SearchInterface {
    page?: number;
}

export enum DeviceSizeEnum {
    tablet = 'tablet',
    mobile = 'mobile',
    desktop = 'desktop',
}
