import { atom } from 'recoil';

export const CatalogListState = atom<AppCatalog.Catalog[]>({
  key: 'CatalogList',
  default: [],
});

export interface CatalogListPaginator {
  perPage: number;
  currentPage: number;
}
export const CatalogListPaginatorState = atom<CatalogListPaginator>({
  key: 'CatalogListPaginator',
  default: {
    currentPage: 1,
    perPage: 2,
  },
});
