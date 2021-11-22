import { appCatalogApi } from './axios';

export async function getApps(): Promise<AppCatalog.Catalog[]> {
  return await appCatalogApi.get('/apps');
}

export async function getAppById(id: string): Promise<AppCatalog.Catalog> {
  return await appCatalogApi.get(`/apps/${id}`);
}