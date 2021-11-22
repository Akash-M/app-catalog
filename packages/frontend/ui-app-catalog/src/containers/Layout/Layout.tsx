import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';

import { AppRoutes } from '$/router/routes';
import CatalogList from '$/views/CatalogList';
import './Layout.scss';

export function Layout(): JSX.Element {
  return (
    <article className="layout">
      <aside className="layout__links">
        <NavLink to={`/${AppRoutes.Cataloglist}`}>Catalog List</NavLink>
      </aside>

      <section className="layout__screens">
        <Routes>
          <Route element={<CatalogList />} path={`/${AppRoutes.Cataloglist}`} />
        </Routes>
      </section>
    </article>
  );
}
