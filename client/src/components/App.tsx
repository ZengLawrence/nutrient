import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AddFoodCalorieFormContainer } from './AddFoodCalorieFormContainer';
import { Home } from './Home';

export const App = (props: {}) => {

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/food-calorie">
          <AddFoodCalorieFormContainer />
        </Route>
      </Switch>
    </Router>
  );
};
