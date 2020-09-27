import React from 'react';
import ReactDOM from "react-dom";

import Details from './containers/details.jsx';
import LandingPage from './containers/landing.jsx';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    {/* <LandingPage /> */}
    <Details />
  </React.StrictMode>,
  rootElement
);
