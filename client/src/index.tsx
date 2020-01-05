import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { App } from './components/App';
import { startMockApiServer } from './mocks/api';
import { rootReducer } from './reducers';

if (process.env.NODE_ENV === "development") {
  console.log('starting API mock server');
  startMockApiServer();
};

const store = createStore(rootReducer, applyMiddleware(thunk));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
