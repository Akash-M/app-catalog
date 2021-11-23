import React from 'react';
import { Route, Routes } from 'react-router-dom';

import SiteHeader from '$/components/SiteHeader';
import { AppRoutes } from '$/router/routes';
import AppDetail from '$/views/AppDetail';
import AppList from '$/views/AppList';
import './Layout.scss';

export function Layout(): JSX.Element {
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
