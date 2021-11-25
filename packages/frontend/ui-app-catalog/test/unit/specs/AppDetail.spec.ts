import { fireEvent, screen, waitFor } from '@testing-library/react';
import { setI18n } from 'react-i18next';

import { getAppById, getAppReadme, getApps } from 'lib-api/src/catalog';
import { customRenderer } from 'lib-utils/src/testing/factory';
import { flushPromises } from 'lib-utils/src/testing/flush-promises';
import { I18N_MISSING_KEY, loadI18n } from 'lib-utils/src/testing/i18n';

import App from '$/App';
import AppDetail from '$/assets/locales/en/AppDetail.yaml';
import AppList from '$/assets/locales/en/AppList.yaml';
import Global from '$/assets/locales/en/Global.yaml';
import { AppListState } from '$/store/catalog/atoms';
import { appListFixtures } from '#/unit/fixtures/app-list';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn().mockReturnValue({ id: 'asdm123312asdnboqwedsa' }),
}));

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

  test('should render app detail based on url param', async () => {
    (getAppById as jest.Mock).mockResolvedValueOnce(appListFixtures[0]);
    (getApps as jest.Mock).mockResolvedValueOnce(appListFixtures);
    (getAppReadme as jest.Mock).mockResolvedValueOnce('mock-read-me');
    const { container } = customRenderer(App, initializeState);
    await flushPromises();
    await waitFor(() => expect(getApps as jest.Mock).toHaveBeenCalledTimes(1));
    fireEvent.click(screen.getByText('prometheus-operator-app-chart'));
    await waitFor(() => {
      expect(getAppById as jest.Mock).toHaveBeenCalledTimes(1);
      expect(getAppReadme as jest.Mock).toHaveBeenCalledTimes(1);
    });
    expect(container.firstChild!.textContent).not.toContain(I18N_MISSING_KEY);
    expect(container.firstChild).toMatchSnapshot();
  });
});
