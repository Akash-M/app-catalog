import React from 'react';
import { useTranslation } from 'react-i18next';

import './AppDetail.scss';

export function AppDetail(): JSX.Element {
  const { t } = useTranslation(['Global', 'AppDetail']);

  // TODO: fetch app from selector using is in the url param.

  return (
    <article className="app-detail">
      <h2>{t('AppDetail.header')}</h2>
    </article>
  );
}
