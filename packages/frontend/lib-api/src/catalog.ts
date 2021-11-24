import { appCatalogApi, externalApi } from './axios';

export async function getApps(): Promise<AppCatalog.Catalog[]> {
  return (await appCatalogApi.get('/apps')).data;
}

export async function getAppById(id: string): Promise<AppCatalog.Catalog> {
  return (await appCatalogApi.get(`/apps/${id}`)).data;
}

export async function getAppReadme(url: string): Promise<string> {
  return (await externalApi.get(url)).data;
}
