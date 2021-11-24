import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import '$/App.scss';
import Layout from '$/containers/Layout';

const App = (): JSX.Element => {
  return (
    <main>
      <Layout />

      <ToastContainer />
    </main>
  );
};

export default App;
