import { appCatalogApi, externalApi } from './axios';

/**
 * GET request to fetch list of all applications.
 *
 * @return Promise<AppCatalog.Catalog[]>
 */
export async function getApps(): Promise<AppCatalog.Catalog[]> {
  return (await appCatalogApi.get('/apps')).data;
}

/**
 * GET request to fetch application information based on id.
 *
 * @param id: App id to be used to fetch detailed information.
 * @return Promise<AppCatalog.Catalog>
 */
export async function getAppById(id: string): Promise<AppCatalog.Catalog> {
  return (await appCatalogApi.get(`/apps/${id}`)).data;
}

/**
 * GET request to fetch data from external urls like ReadMes.
 *
 * @param url: external url from which to fetch readme information.
 */
export async function getAppReadme(url: string): Promise<string> {
  return (await externalApi.get(url)).data;
}
