import * as React from 'react';

import { FoodInput } from "./FoodInput";
import { FoodList } from "./FoodList";
import { FoodCalorie } from '../models/FoodCalorie';

export interface AppProps {
    foodCalories? : FoodCalorie[];
};

let foodCalories: FoodCalorie[] = [];
const initialState = {foodCalories: foodCalories};
type State = typeof initialState;

class App extends React.Component<AppProps, State> {
    
    constructor(props : any) {
        super(props);
        this.state = initialState;
    }

    render() {
      return (
        <div>
            <FoodInput />
            <FoodList foodCalories= {this.state.foodCalories} />
        </div>    
      );
    }
  }

  export { App }