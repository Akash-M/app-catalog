import { waitFor } from '@testing-library/react';
import { setI18n } from 'react-i18next';

import { getApps } from 'lib-api/src/catalog';
import { customRenderer } from 'lib-utils/src/testing/factory';
import { I18N_MISSING_KEY, loadI18n } from 'lib-utils/src/testing/i18n';

import App from '$/App';
import AppList from '$/assets/locales/en/AppList.yaml';
import Global from '$/assets/locales/en/Global.yaml';
import { AppListState } from '$/store/catalog/atoms';
import { appListFixtures } from '#/unit/fixtures/app-list';

jest.mock('lib-api/src/catalog', () => ({
  getApps: jest.fn(),
}));

const initializeState = ({ set }: any) => {
  set(AppListState, appListFixtures);
};

describe('<App />', () => {
  beforeAll(() => {
    setI18n(loadI18n('Global', { Global, AppList }));
  });

  beforeEach(jest.clearAllMocks);

  test('should render list of apps on load', async () => {
    (getApps as jest.Mock).mockResolvedValueOnce(appListFixtures);
    const { container } = customRenderer(App, initializeState);
    await waitFor(() => expect(getApps as jest.Mock).toHaveBeenCalledTimes(1));
    expect(container.firstChild!.textContent).not.toContain(I18N_MISSING_KEY);
    expect(container.firstChild).toMatchSnapshot();
  });
});
