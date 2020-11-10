import React from 'react';

import { render as rtlRender } from '@testing-library/react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import appReducer from '../../redux/reducers/appReducer.js';

function render(
  ui,
  {
    initialState,
    store = createStore(appReducer, initialState),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

export default render;
