import React from 'react';
import ReactDOM from "react-dom";

import LandingPage from './containers/landing.jsx';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <LandingPage />
  </React.StrictMode>,
  rootElement
);
