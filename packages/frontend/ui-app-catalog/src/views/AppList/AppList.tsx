import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { getApps } from 'lib-api/src/catalog';

import { AppListState } from '$/store/catalog/atoms';
import './AppList.scss';

export function AppList(): JSX.Element {
  const { t } = useTranslation(['Global', 'AppList']);
  const navigate = useNavigate();

  const catalogList = useRecoilValue(AppListState);
  const setCatalogList = useSetRecoilState(AppListState);

  const fetchCatalogList = async () => {
    setCatalogList(await getApps());
  };

  useEffect(() => {
    void fetchCatalogList();
  }, []);

  return (
    <article className="app-list">
      <h2>{t('AppList.header')}</h2>

      <section className="app-list__tiles">
        {catalogList.length > 0 &&
          catalogList.map((catalog, catalogIndex) => {
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
