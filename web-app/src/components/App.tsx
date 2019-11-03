import React, { useState } from 'react';

import { FoodList } from "./FoodList";
import { FoodCalorie } from '../models/FoodCalorie';
import { FoodInput } from './FoodInput';

export interface AppProps {
  foodCalories?: FoodCalorie[];
};

let emptyFoodCalories: FoodCalorie[] = [];

export const App = (props: AppProps) => {

  const [foodCalories, setFoodCalories] = useState(emptyFoodCalories);

  const addFoodCalorie = (foodCalorie: FoodCalorie) => {
      setFoodCalories([...foodCalories, foodCalorie]);
  }

  return (
    <div>
      <FoodInput onFoodCalorieChanged={addFoodCalorie}/>
      <FoodList foodCalories={foodCalories} />
    </div>
  );
}
