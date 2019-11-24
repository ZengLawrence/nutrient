import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { FoodInputForm } from './FoodInputForm';
import { Home } from './Home';

export interface AppProps {
}

export const App = (props: AppProps) => {

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/food-calorie">
          <FoodInputForm />
        </Route>
      </Switch>
    </Router>
  );
};
