import { fireEvent, waitFor } from '@testing-library/react';
import { setI18n } from 'react-i18next';
import selectEvent from 'react-select-event';

import { getAppById, getAppReadme, getApps } from 'lib-api/src/catalog';
import { customRenderer } from 'lib-utils/src/testing/factory';
import { I18N_MISSING_KEY, loadI18n } from 'lib-utils/src/testing/i18n';

import App from '$/App';
import AppDetail from '$/assets/locales/en/AppDetail.yaml';
import AppList from '$/assets/locales/en/AppList.yaml';
import Global from '$/assets/locales/en/Global.yaml';
import { AppListState } from '$/store/catalog/atoms';
import { appListFixtures } from '#/unit/fixtures/app-list';

jest.mock('lib-api/src/catalog', () => ({
  getAppById: jest.fn(),
  getAppReadme: jest.fn(),
  getApps: jest.fn(),
}));

const initializeState = ({ set }: any) => {
  set(AppListState, appListFixtures);
};

describe('<App />', () => {
  beforeAll(() => {
    setI18n(loadI18n('Global', { Global, AppDetail, AppList }));
  });

  beforeEach(jest.clearAllMocks);

  test('should render list of apps on load', async () => {
    (getApps as jest.Mock).mockResolvedValueOnce(appListFixtures);
    const { container } = customRenderer(App, initializeState);
    await waitFor(() => expect(getApps as jest.Mock).toHaveBeenCalledTimes(1));
    expect(container.firstChild!.textContent).not.toContain(I18N_MISSING_KEY);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.querySelectorAll('.ac-tile').length).toBe(8);
  });

  test('should render app list filtered by author', async () => {
    (getApps as jest.Mock).mockResolvedValueOnce(appListFixtures);
    const { container, getByText } = customRenderer(App, initializeState);
    await waitFor(() => expect(getApps as jest.Mock).toHaveBeenCalledTimes(1));
    const authorFilter = await waitFor(() => getByText('Filter by Author'));
    await selectEvent.select(authorFilter, 'Giantswarm');
    expect(container.querySelectorAll('.ac-tile').length).toBe(4);
    await selectEvent.clearAll(getByText('Giantswarm'));
    expect(container.querySelectorAll('.ac-tile').length).toBe(8);
  });

  test('should display filtered app list in global search', async () => {
    (getAppById as jest.Mock).mockResolvedValueOnce(appListFixtures[0]);
    (getApps as jest.Mock).mockResolvedValueOnce(appListFixtures);
    (getAppReadme as jest.Mock).mockResolvedValueOnce('mock-read-me');
    const { container, getByText } = customRenderer(App, initializeState);
    await waitFor(() => expect(getApps as jest.Mock).toHaveBeenCalledTimes(1));
    const node = await waitFor(() => getByText('Search'));
    await selectEvent.select(node, 'prometheus-operator-app-chart');
    fireEvent.click(getByText('prometheus-operator-app-chart'));
    await waitFor(() => {
      expect(getAppById as jest.Mock).toHaveBeenCalledTimes(1);
      expect(getAppReadme as jest.Mock).toHaveBeenCalledTimes(1);
    });
    expect(container.firstChild).toMatchSnapshot();
    await waitFor(() => {
      expect(getByText('AppDetail.backButton')).toBeTruthy();
    });
  });
});
