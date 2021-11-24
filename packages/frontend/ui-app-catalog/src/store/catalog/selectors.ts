import { selector } from 'recoil';

import { AppListState } from './atoms';

export const AppNameSelector = selector({
  key: 'AppNameSelector',
  get: ({ get }) => {
    return get(AppListState).map((app) => ({
      label: app.name,
      value: app.name,
    }));
  },
});
