import React, { useState, useEffect } from 'react';

import { FoodList } from './FoodList';
import { FoodCalorie } from '../models/FoodCalorie';
import { FoodInput } from './FoodInput';
import { Button } from 'reactstrap';
import { fetchAllFoodCalories } from '../services/FoodCalorieService';

export interface AppProps {
  foodCalories?: FoodCalorie[];
}

export const App = (props: AppProps) => {

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const [foodCalories, setFoodCalories] = useState([] as FoodCalorie[]);
  useEffect( () => {

    function callback(initialFoodCalories: FoodCalorie[]) {
      setFoodCalories(initialFoodCalories);
    }
    
    fetchAllFoodCalories(callback);
  });

  const addFoodCalorie = (foodCalorie: FoodCalorie) => {
    setFoodCalories([...foodCalories, foodCalorie]);
  };

  return (
    <div>
      <Button color="primary" onClick={toggle}>Add</Button>
      <FoodInput isOpen={modal} toggle={toggle} onFoodCalorieChanged={addFoodCalorie} />
      <FoodList foodCalories={foodCalories} />
    </div>
  );
};
