import React from 'react';
import { Route, Routes } from 'react-router-dom';

import SiteHeader from '$/components/SiteHeader';
import { AppRoutes } from '$/router/routes';
import CatalogList from '$/views/CatalogList';
import './Layout.scss';

export function Layout(): JSX.Element {
  return (
    <article className="layout">
      <SiteHeader />

      <section className="layout__screens">
        <Routes>
          <Route element={<CatalogList />} path={`/${AppRoutes.Cataloglist}`} />
        </Routes>
      </section>
    </article>
  );
}
