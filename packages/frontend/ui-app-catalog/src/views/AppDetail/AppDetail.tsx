import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { getAppById, getAppReadme } from 'lib-api/src/catalog';

import ArrowLeftIcon from '$/assets/images/arrow-left.svg';
import './AppDetail.scss';

export function AppDetail(): JSX.Element {
  const { t } = useTranslation(['Global', 'AppDetail']);
  const navigate = useNavigate();
  const { id } = useParams();
  const [appDetail, setAppDetail] = useState<Catalog.App>();
  const [appReadme, setAppReadme] = useState<string>('');

  const fetchAppReadme = async () => {
    if (appDetail?.readmeURL) {
      try {
        setAppReadme(await getAppReadme(appDetail.readmeURL));
      } catch {
        toast.error(t('AppDetail.error.readme'), {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      }
    }
  };

  const fetchAppDetail = async () => {
    /* istanbul ignore else */
    if (id) {
      try {
        setAppDetail(await getAppById(id));
      } catch {
        toast.error(t('AppDetail.error.appFetch'), {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      }
    }
  };

  useEffect(() => {
    void fetchAppDetail();
  }, [id]);

  useEffect(() => {
    void fetchAppReadme();
  }, [appDetail]);

  return (
    <article className="app-detail">
      <button onClick={() => navigate(-1)}>
        <img alt="left-arrow" src={ArrowLeftIcon} />
        {t('AppDetail.backButton')}
      </button>

      {appDetail && (
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
                <h4>{t('AppDetail.details.version')}</h4>{' '}
                <p>{appDetail.version}</p>
              </div>

              <div>
                <h4>{t('AppDetail.details.description')}</h4>{' '}
                <p>{appDetail.description}</p>
              </div>

              {appDetail.author && (
                <div>
                  <h4>{t('AppDetail.details.author')}</h4>{' '}
                  <p>{appDetail.author}</p>
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
