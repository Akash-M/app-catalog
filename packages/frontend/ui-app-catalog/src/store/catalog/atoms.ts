import { atom } from 'recoil';

export const AppListState = atom<AppCatalog.Catalog[]>({
  key: 'AppList',
  default: [],
});
