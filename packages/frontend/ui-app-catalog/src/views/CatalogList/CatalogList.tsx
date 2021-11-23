import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import './CatalogList.scss';

export function CatalogList(): JSX.Element {
  const { t } = useTranslation(['Global', 'CatalogList']);

  return (
    <article className="catalog-list">
      <h2>{t('CatalogList.header')}</h2>
    </article>
  );
}
