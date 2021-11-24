import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
// eslint-disable-next-line import/named,ordered-imports/ordered-imports
import Select, { MultiValue } from 'react-select';
import { useRecoilValue } from 'recoil';

import { AppListState } from '$/store/catalog/atoms';
import { AppAuthorSelector } from '$/store/catalog/selectors';
import './AppList.scss';

export function AppList(): JSX.Element {
  const { t } = useTranslation(['Global', 'AppList']);
  const navigate = useNavigate();
  const [visibleAppList, setVisibleAppList] = useState<AppCatalog.Catalog[]>(
    [],
  );

  const appList = useRecoilValue(AppListState);
  const authorList = useRecoilValue(AppAuthorSelector);

  const handleAuthorSelect = (
    items: MultiValue<{ label: string | undefined; value: string | undefined }>,
  ) => {
    if (items.length === 0) {
      setVisibleAppList(appList);
      return;
    }
    setVisibleAppList(
      appList.filter((app) => {
        return items.map((item) => item.value).includes(app.author);
      }),
    );
  };

  useEffect(() => {
    setVisibleAppList(appList);
  }, [appList]);

  return (
    <article className="app-list">
      <h2>{t('AppList.header')}</h2>

      <section className="app-list__filters">
        <Select
          isMulti
          className="app-list__filters__author"
          options={authorList}
          placeholder={'Filter by Author'}
          onChange={handleAuthorSelect}
        />
      </section>

      <section className="app-list__tiles">
        {visibleAppList.length > 0 &&
          visibleAppList.map((catalog, catalogIndex) => {
            return (
              // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
              <div
                key={catalogIndex}
                className="ac-tile"
                // TODO: use AppRoutes enum.
                onClick={() => navigate(`/app/${catalog.id}`)}
              >
                <div className="ac-tile__header">
                  {catalog.iconURL && (
                    <img
                      alt={catalog.iconURL}
                      className="icon"
                      src={catalog.iconURL}
                    />
                  )}

                  <p className="title">{catalog.name}</p>
                </div>

                <div className="details">
                  <p>ID: {catalog.id}</p>

                  <p>Version: {catalog.version}</p>

                  <p>Description: {catalog.description}</p>

                  {catalog.author && <p>Author: {catalog.author}</p>}
                </div>
              </div>
            );
          })}
      </section>
    </article>
  );
}
