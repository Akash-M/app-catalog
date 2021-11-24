import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink, useNavigate } from 'react-router-dom';
// eslint-disable-next-line import/named,ordered-imports/ordered-imports
import Select, { SingleValue } from 'react-select';
import { useRecoilValue } from 'recoil';

import { AppRoutes } from '$/router/routes';
import { AppNameSelector } from '$/store/catalog/selectors';
import './SiteHeader.scss';

export function SiteHeader(): JSX.Element {
  const { t } = useTranslation(['Global']);
  const navigate = useNavigate();

  const appList = useRecoilValue(AppNameSelector);

  const handleAppSearch = (
    item: SingleValue<{ label: string | undefined; value: string | undefined }>,
  ) => {
    if (item && item.value) {
      navigate(`/app/${item.value}`);
    }
  };

  return (
    <nav className="site-header">
      <NavLink to={`/${AppRoutes.AppList}`}>
        <h2>{t('Global.appName')}</h2>
      </NavLink>

      <Select
        className="site-header__search"
        options={appList}
        placeholder={'Search'}
        onChange={handleAppSearch}
      />
    </nav>
  );
}
