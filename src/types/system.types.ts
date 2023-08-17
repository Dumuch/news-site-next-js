export interface ImageInterface {
    path: string;
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

export interface FindAndCountAll<T = []> {
    count: number;
    rows: T;
}

export enum FormatDateEnum {
    monthDayYear = 'PP',
}