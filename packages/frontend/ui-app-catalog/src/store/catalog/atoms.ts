import { atom } from 'recoil';

export const AppListState = atom<AppCatalog.Catalog[]>({
  key: 'CatalogList',
  default: [],
});

export interface AppListPaginator {
  perPage: number;
  currentPage: number;
}
export const AppListPaginatorState = atom<AppListPaginator>({
  key: 'AppListPaginator',
  default: {
    currentPage: 1,
    perPage: 2,
  },
});
