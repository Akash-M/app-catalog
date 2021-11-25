import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';
import { useNavigate, useParams } from 'react-router-dom';

import { getAppById, getAppReadme } from 'lib-api/src/catalog';

import ArrowLeftIcon from '$/assets/images/arrow-left.svg';
import './AppDetail.scss';

export function AppDetail(): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t } = useTranslation(['Global', 'AppDetail']);
  const navigate = useNavigate();
  const { id } = useParams();
  const [appDetail, setAppDetail] = useState<Catalog.App>();
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
      <button onClick={() => navigate(-1)}>
        <img alt="left-arrow" src={ArrowLeftIcon} />
        {t('AppDetail.backButton')}
      </button>

      {appDetail && !error && (
        <>
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
                <h4>{t('AppDetail.details.id')}</h4> <p>{appDetail.id}</p>
              </div>

              <div>
                <h4>{t('AppDetail.details.version')}</h4> <p>{appDetail.version}</p>
              </div>

              <div>
                <h4>{t('AppDetail.details.description')}</h4> <p>{appDetail.description}</p>
              </div>

              {appDetail.author && (
                <div>
                  <h4>{t('AppDetail.details.author')}</h4> <p>{appDetail.author}</p>
                </div>
              )}

              {appDetail.url && (
                <div>
                  <h4>{t('AppDetail.details.url')}</h4>
                  <a href={appDetail.url} rel="noreferrer" target="_blank">
                    {appDetail.url}
                  </a>
                </div>
              )}
            </div>
          </section>

          {appDetail.readmeURL && (
            <section className="readme">
              <h4>{t('AppDetail.details.readme')}</h4>

              <ReactMarkdown>{appReadme}</ReactMarkdown>
            </section>
          )}
        </>
      )}
    </article>
  );
}
