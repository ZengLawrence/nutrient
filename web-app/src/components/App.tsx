import * as React from 'react';
import { useState } from 'react';
import { FoodInput } from "./FoodInput";
import { FoodList } from "./FoodList";
import { FoodCalorie } from '../models/FoodCalorie';

export interface AppProps {
  foodCalories?: FoodCalorie[];
};

let emptyFoodCalories: FoodCalorie[] = [];

export const App = (props: AppProps) => {

  const [foodCalories, setFoodCalories] = useState(emptyFoodCalories);

  const AddFoodCalorie = (foodCalorie: FoodCalorie) => {
    setFoodCalories([...foodCalories, foodCalorie]);
  }
  return (
    <div>
      <FoodInput addFoooCalorie={AddFoodCalorie} />
      <FoodList foodCalories={foodCalories} />
    </div>
  );
}
