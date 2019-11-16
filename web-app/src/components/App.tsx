import React, { useState, useEffect } from 'react';

import { FoodList } from './FoodList';
import { FoodCalorie } from '../models/FoodCalorie';
import { FoodInput } from './FoodInput';
import { Button } from 'reactstrap';
import { fetchAllFoodCalories, addFoodCalorie } from '../services/FoodCalorieService';

export interface AppProps {
  foodCalories?: FoodCalorie[];
}

export const App = (props: AppProps) => {

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const [isLoaded, setIsLoaded] = useState(false);
  const [foodCalories, setFoodCalories] = useState([] as FoodCalorie[]);
  useEffect( () => {

    function callback(initialFoodCalories: FoodCalorie[]) {
      setFoodCalories(initialFoodCalories);
      setIsLoaded(true);
    }
    
    if (!isLoaded) {
      fetchAllFoodCalories(callback);
    }
    
  });

  const onFoodCalorieChanged = (foodCalorie: FoodCalorie) => {
    addFoodCalorie(foodCalorie, (newFoodCalorie: FoodCalorie) => {
      setFoodCalories([...foodCalories, newFoodCalorie]);
    });
  };

  return (
    <div>
      <Button color="primary" onClick={toggle}>Add</Button>
      <FoodInput isOpen={modal} toggle={toggle} onFoodCalorieChanged={onFoodCalorieChanged} />
      <FoodList foodCalories={foodCalories} />
    </div>
  );
};
