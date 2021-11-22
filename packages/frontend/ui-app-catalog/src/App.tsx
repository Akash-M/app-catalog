import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import '$/App.scss';
import SiteHeader from '$/components/SiteHeader';
import Layout from '$/containers/Layout';

const App = (): JSX.Element => {
  return (
    <main>
      <SiteHeader />

      <Layout />

      <ToastContainer />
    </main>
  );
};

export default App;
