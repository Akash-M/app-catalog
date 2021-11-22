import { appCatalogApi } from '$/axios';
import { getAppById, getApps } from '$/catalog';
import { appCatalogFixtures } from '#/unit/fixtures/app-catalog';

const mockGet = jest.fn();
jest.mock('../../../src/axios');
appCatalogApi.get = mockGet;

describe('Catalog Api', () => {
  test('getApps', async () => {
    mockGet.mockResolvedValueOnce({ data: appCatalogFixtures });
    await getApps();
    expect(mockGet).toHaveBeenCalledWith('/apps');
  });

  test('getAppById', async () => {
    mockGet.mockResolvedValueOnce({ data: appCatalogFixtures });
    await getAppById('mock-app-id');
    expect(mockGet).toHaveBeenCalledWith('/apps/mock-app-id');
  });
});
