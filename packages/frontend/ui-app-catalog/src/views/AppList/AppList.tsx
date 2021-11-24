import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import { useRecoilValue } from 'recoil';

import { AppListState } from '$/store/catalog/atoms';
import { AppAuthorSelector } from '$/store/catalog/selectors';
import './AppList.scss';

export function AppList(): JSX.Element {
  const { t } = useTranslation(['Global', 'AppList']);
  const navigate = useNavigate();

  const catalogList = useRecoilValue(AppListState);
  const authorList = useRecoilValue(AppAuthorSelector);

  return (
    <article className="app-list">
      <h2>{t('AppList.header')}</h2>

      <section className="app-list__filters">
        <Select
          className="app-list__filters__author"
          options={authorList}
          placeholder={'Search'}
        />
      </section>

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
