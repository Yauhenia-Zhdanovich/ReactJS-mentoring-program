import React from 'react';
import ReactDOM from 'react-dom';
import { hydrate } from 'react-dom';


import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';


import store from './redux/store/store.js';

import Details from './containers/details.jsx';
import LandingPage from './containers/landing.jsx';
import NotFound from './components/notFound.jsx';
import './index.css';

const rootElement = document.getElementById('root');

const App = () => (
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
  </React.StrictMode>
);

const RootComponent = hot(module)(App);


hydrate(RootComponent, rootElement);
// ReactDOM.render(
  
//   rootElement
// );
