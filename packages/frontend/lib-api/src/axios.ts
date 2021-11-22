import axios, { AxiosRequestConfig } from 'axios';

const requestConfig: AxiosRequestConfig = {
  timeout: 10000,
};

const BASE_URL = 'http://localhost:3000';

export const appCatalogApi = axios.create({
  ...requestConfig,
  baseURL: BASE_URL,
});
