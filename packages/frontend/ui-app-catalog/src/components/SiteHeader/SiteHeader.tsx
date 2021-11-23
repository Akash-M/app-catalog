import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

import { AppRoutes } from '$/router/routes';
import './SiteHeader.scss';

export function SiteHeader(): JSX.Element {
  const { t } = useTranslation(['Global']);

  return (
    <nav className="site-header">
      <NavLink to={`/${AppRoutes.Cataloglist}`}>
        <h2>{t('Global.appName')}</h2>
      </NavLink>
    </nav>
  );
}
