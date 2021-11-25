import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import SiteHeader from '$/components/SiteHeader';
import { AppRoutes } from '$/router/routes';
import AppList from '$/views/AppList';
import './Layout.scss';

export function Layout(): JSX.Element {
  // Lazy load AppDetail component since AppList is the default screen.
  const AppDetail = lazy(() => import('$/views/AppDetail'));

  return (
    <article className="layout">
      <SiteHeader />

      <section className="layout__screens">
        <Routes>
          <Route element={<AppList />} path={`/${AppRoutes.AppList}`} />

          <Route element={<AppDetail />} path={`/${AppRoutes.AppDetail}`} />
        </Routes>
      </section>
    </article>
  );
}
