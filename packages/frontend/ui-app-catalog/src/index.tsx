import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import setI18n from 'lib-utils/src/i18n';

import App from '$/App';

export function Root(): JSX.Element {
  return (
    <React.StrictMode>
      <RecoilRoot>
        <Router>
          <Suspense fallback={null}>
            <App />
          </Suspense>
        </Router>
      </RecoilRoot>
    </React.StrictMode>
  );
}

setI18n('Global', true, { en: '0.2' });

const rootElement = document.querySelector('#root');
ReactDOM.render(<Root />, rootElement);
