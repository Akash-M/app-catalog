import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';

import { getAppById, getAppReadme } from 'lib-api/src/catalog';

import './AppDetail.scss';

export function AppDetail(): JSX.Element {
  const { t } = useTranslation(['Global', 'AppDetail']);
  // TODO: fix type.
  const { id } = useParams<any>();
  const [appDetail, setAppDetail] = useState<AppCatalog.Catalog>();
  const [appReadme, setAppReadme] = useState<string>('');
  // TODO: specify error types.
  const [error, setError] = useState(false);

  const fetchAppDetail = async () => {
    try {
      if (id) {
        const response = await getAppById(id);
        setAppDetail(response);
        if (response.readmeURL) {
          setAppReadme(await getAppReadme(response.readmeURL));
        }
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    }
  };

  useEffect(() => {
    void fetchAppDetail();
  }, [id]);

  return (
    <article className="app-detail">
      <h2>{t('AppDetail.header')}</h2>

      {appDetail && !error && (
        <section className="app-detail__info">
          {appDetail.iconURL && (
            <img
              alt={appDetail.iconURL}
              className="icon"
              src={appDetail.iconURL}
            />
          )}

          <p className="title">{appDetail.name}</p>

          <p>ID: {appDetail.id}</p>

          <p>Version: {appDetail.version}</p>

          <p>Description: {appDetail.description}</p>

          {appDetail.author && <p>Author: {appDetail.author}</p>}

          {appDetail.url && (
            <p>
              <a href={appDetail.url} rel="noreferrer" target="_blank">
                {appDetail.url}
              </a>
            </p>
          )}

          {appDetail.readmeURL && <ReactMarkdown>{appReadme}</ReactMarkdown>}
        </section>
      )}
    </article>
  );
}
