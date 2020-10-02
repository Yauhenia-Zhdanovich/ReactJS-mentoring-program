import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import appReducer from '../reducers/appReducer.js';
import rootSaga from '../effects/appEffect.js';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(appReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

export default store;
