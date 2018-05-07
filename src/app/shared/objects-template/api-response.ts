import { Pagination } from './pagination';

export class ApiResponse<T> {
    public docs: T;
    public pagination: Pagination;
}
