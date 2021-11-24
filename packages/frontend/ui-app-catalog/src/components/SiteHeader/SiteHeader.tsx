import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import Select from 'react-select';
import { useRecoilValue } from 'recoil';

import { AppRoutes } from '$/router/routes';
import { AppNameSelector } from '$/store/catalog/selectors';
import './SiteHeader.scss';

export function SiteHeader(): JSX.Element {
  const { t } = useTranslation(['Global']);

  const appList = useRecoilValue(AppNameSelector);

  return (
    <nav className="site-header">
      <NavLink to={`/${AppRoutes.AppList}`}>
        <h2>{t('Global.appName')}</h2>
      </NavLink>

      <Select
        className="site-header__search"
        options={appList}
        placeholder={'Search'}
      />
    </nav>
  );
}
