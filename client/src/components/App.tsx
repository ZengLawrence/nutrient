import React from 'react';
import { Home } from './Home';
import { FoodInputForm } from './FoodInputForm';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

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
