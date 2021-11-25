import { atom } from 'recoil';

export const AppListState = atom<Catalog.App[]>({
  key: 'AppList',
  default: [],
});
