import axios, { AxiosRequestConfig } from 'axios';

const requestConfig: AxiosRequestConfig = {
  timeout: 10000,
};

const BASE_URL = 'http://localhost:3000';

// Axios config to connect with backend.
export const appCatalogApi = axios.create({
  ...requestConfig,
  baseURL: BASE_URL,
});

// Axios config for making external api calls like fetching readmes.
export const externalApi = axios.create({ ...requestConfig });
