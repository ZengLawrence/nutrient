import React, { useState } from 'react';

import { FoodList } from './FoodList';
import { FoodCalorie } from '../models/FoodCalorie';
import { FoodInput } from './FoodInput';
import { Button } from 'reactstrap';

export interface AppProps {
  foodCalories?: FoodCalorie[];
}

let emptyFoodCalories: FoodCalorie[] = [];

export const App = (props: AppProps) => {

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const [foodCalories, setFoodCalories] = useState(emptyFoodCalories);

  const addFoodCalorie = (foodCalorie: FoodCalorie) => {
    setFoodCalories([...foodCalories, foodCalorie]);
  }

  return (
    <div>
      <Button color="primary" onClick={toggle}>Add</Button>
      <FoodInput isOpen={modal} toggle={toggle} onFoodCalorieChanged={addFoodCalorie} />
      <FoodList foodCalories={foodCalories} />
    </div>
  )
}
