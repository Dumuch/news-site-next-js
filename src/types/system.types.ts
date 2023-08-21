export interface ImageInterface {
    path: string;
}

export interface CategoryInterface {
    id: string;
    title: string;
}

export interface SortedInterface {
    offset?: number;
    limit?: number;
    sortField?: string | null;
    sortOrder?: number | null;
}

export interface FilteredInterface {
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

export interface SearchProps {
    page?: number;
}

export enum DeviceSizeEnum {
    tablet = 'tablet',
    mobile = 'mobile',
    desktop = 'desktop',
}

export interface SearchInterface<T> {
    setRowsList(rowsAndCount: FindAndCountAllInterface<T[]>): void;
}
