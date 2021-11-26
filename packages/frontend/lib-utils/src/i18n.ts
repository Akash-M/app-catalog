// eslint-disable-next-line unicorn/prevent-abbreviations
import i18n from 'i18next';
import ChainedBackend from 'i18next-chained-backend';
import LocalStorageBackend from 'i18next-localstorage-backend';
import HttpApi from 'i18next-xhr-backend';
import { initReactI18next } from 'react-i18next';
import yaml from 'yaml';

const debug = process.env.NODE_ENV === 'development';

export const SUPPORTED_LANGUAGES = ['en'];

/**
 * Load i18next instance with base configuration.
 * @param defaultNamespace
 * @param useSuspense
 * @param cacheVersions Update version for each language when there are changes in translation files
 * @param cacheExpirationTime
 * @returns
 */
function setI18n(
  defaultNamespace: string,
  useSuspense: boolean,
  cacheVersions: { en: string },
  cacheExpirationTime = 7 * 24 * 60 * 60 * 1000,
): typeof i18n {
  void i18n
    // For the moment, only EN translations are loaded.
    // .use(LanguageDetector)
    .use(ChainedBackend)
    .use(initReactI18next)
    .init({
      lng: 'en',
      fallbackLng: 'en',
      ns: [defaultNamespace],
      defaultNS: defaultNamespace,
      nsSeparator: '.',
      debug,
      keySeparator: '.',
      supportedLngs: SUPPORTED_LANGUAGES,
      interpolation: {
        escapeValue: false,
      },
      backend: {
        backends: [LocalStorageBackend, HttpApi],
        backendOptions: [
          {
            versions: cacheVersions,
            expirationTime: debug ? 0 : cacheExpirationTime,
          },
          {
            loadPath: '/locales/{{lng}}/{{ns}}.yaml',
            parse(data: string) {
              return yaml.parse(data) as unknown;
            },
          },
        ],
      },
      // react-i18next options
      // Do not render component before language file is loaded
      react: {
        useSuspense,
      },
      returnObjects: true,
    });
  return i18n;
}

export default setI18n;
