export interface Category {
    id: string;
    name: string;
    description: string;
    createdAt: Date;
}

export interface Categories {
    results: Category[];
    currentPage: number;
    pageCount: number;
    pageSize: number;
    rowCount: number;
    firstRowOnPage: number;
    lastRowOnPage: number;
}