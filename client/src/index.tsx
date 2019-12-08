import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { refreshFoodCalories } from './actions';
import { App } from './components/App';
import { startMockApiServer } from './mocks/api';
import { rootReducer } from './reducers';
import { fetchAll } from './services/FoodCalorieService';

if (process.env.NODE_ENV === "development") {
  console.log('starting API mock server');
  startMockApiServer();
};

const store = createStore(rootReducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

fetchAll(foodCalories => store.dispatch(refreshFoodCalories(foodCalories)));