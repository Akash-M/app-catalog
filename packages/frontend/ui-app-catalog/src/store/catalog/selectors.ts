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

export const AppAuthorSelector = selector({
  key: 'AppNameSelector',
  get: ({ get }) => {
    const distinctAppAuthors = new Set(
      get(AppListState).map((app) => app.author),
    );

    return [...distinctAppAuthors].map((author) => ({
      label: author,
      value: author,
    }));
  },
});
