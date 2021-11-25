import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';

import { getAppById, getAppReadme } from 'lib-api/src/catalog';

import './AppDetail.scss';

export function AppDetail(): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
      {appDetail && !error && (
        <section>
          <h2>{appDetail.name}</h2>

          {appDetail.iconURL && (
            <img
              alt={appDetail.iconURL}
              className="icon"
              src={appDetail.iconURL}
            />
          )}

          <div className="info">
            <div>
              <h4>ID</h4> <p>{appDetail.id}</p>
            </div>

            <div>
              <h4>Version</h4> <p>{appDetail.version}</p>
            </div>

            <div>
              <h4>Description</h4> <p>{appDetail.description}</p>
            </div>

            {appDetail.author && (
              <div>
                <h4>Author</h4> <p>{appDetail.author}</p>
              </div>
            )}

            {appDetail.url && (
              <div>
                <h4>URL</h4>
                <a href={appDetail.url} rel="noreferrer" target="_blank">
                  {appDetail.url}
                </a>
              </div>
            )}
          </div>

          {appDetail.readmeURL && (
            <ReactMarkdown className="readme">{appReadme}</ReactMarkdown>
          )}
        </section>
      )}
    </article>
  );
}
