import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import store from './redux/store/store.js';

import Details from './containers/details.jsx';
import LandingPage from './containers/landing.jsx';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <LandingPage />
      {/* <Details /> */}
    </Provider>
  </React.StrictMode>,
  rootElement
);
