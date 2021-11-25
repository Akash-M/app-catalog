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
  const [visibleAppList, setVisibleAppList] = useState<Catalog.App[]>(
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
          className="filter"
          options={authorList}
          placeholder={'Filter by Author'}
          onChange={(e) => {
            console.info(e);
            handleAuthorSelect(e);
          }}
        />
      </section>

      <section className="app-list__tiles">
        {visibleAppList.length > 0 &&
          visibleAppList.map((app, appIndex) => {
            return (
              // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
              <div
                key={appIndex}
                className="ac-tile"
                // TODO: use AppRoutes enum.
                onClick={() => navigate(`/app/${app.id}`)}
              >
                <div className="ac-tile__header">
                  {app.iconURL && (
                    <img alt={app.iconURL} className="icon" src={app.iconURL} />
                  )}

                  <p className="title">{app.name}</p>
                </div>

                <div className="ac-tile__details">
                  <p>Description: {app.description}</p>

                  {app.author && <p>Author: {app.author}</p>}
                </div>

                <div className="ac-tile__chips">
                  {app.url ? (
                    <span className="ac-chip ac-chip--available">
                      URL available
                    </span>
                  ) : (
                    <span className="ac-chip ac-chip--unavailable">
                      URL unavailable
                    </span>
                  )}

                  {app.readmeURL ? (
                    <span className="ac-chip ac-chip--available">
                      ReadMe Available
                    </span>
                  ) : (
                    <span className="ac-chip ac-chip--unavailable">
                      ReadMe Unavailable
                    </span>
                  )}
                </div>
              </div>
            );
          })}
      </section>
    </article>
  );
}
