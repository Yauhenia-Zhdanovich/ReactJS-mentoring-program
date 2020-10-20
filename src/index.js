import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import store from './redux/store/store.js';

import Details from './containers/details.jsx';
import LandingPage from './containers/landing.jsx';
import NotFound from './components/notFound.jsx';
import './index.css';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact component={LandingPage}/>
          <Route path="/movies" exact component={Details}/>
          <Route path="/movies/:id" component={Details}/>
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  rootElement
);
