import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import SiteHeader from '$/components/SiteHeader';
import { AppRoutes } from '$/router/routes';
import AppList from '$/views/AppList';
import './Layout.scss';

// Note: As part of future improvements, a loader component should be added
// as fallback for Suspense.
export function Layout(): JSX.Element {
  // Lazy load AppDetail component since AppList is the default screen.
  const AppDetail = lazy(() => import('$/views/AppDetail'));

  return (
    <article className="layout">
      <SiteHeader />

      <section className="layout__screens">
        <Suspense fallback={null}>
          <Routes>
            <Route element={<AppList />} path={`/${AppRoutes.AppList}`} />

            <Route element={<AppDetail />} path={`/${AppRoutes.AppDetail}`} />
          </Routes>
        </Suspense>
      </section>
    </article>
  );
}
