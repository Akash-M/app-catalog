import React, { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSetRecoilState } from 'recoil';

import { getApps } from 'lib-api/src/catalog';

import '$/App.scss';
import Layout from '$/containers/Layout';
import { AppListState } from '$/store/catalog/atoms';

const App = (): JSX.Element => {
  const setAppList = useSetRecoilState(AppListState);

  const fetchAppList = async () => {
    setAppList(await getApps());
  };

  useEffect(() => {
    void fetchAppList();
  }, []);

  return (
    <main>
      <Layout />

      <ToastContainer />
    </main>
  );
};

export default App;
