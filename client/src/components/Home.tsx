import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { FoodCalorie } from '../models/FoodCalorie';
import { addFoodCalorie, fetchAllFoodCalories } from '../services/FoodCalorieService';
import { FoodInput } from './FoodInput';
import { FoodList } from './FoodList';


export interface HomeProps {
}

export const Home = (props: HomeProps) => {

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const [isLoaded, setIsLoaded] = useState(false);
  const [foodCalories, setFoodCalories] = useState([] as FoodCalorie[]);

  useEffect( () => {

    function callback(initialFoodCalories: FoodCalorie[]) {
      setFoodCalories(initialFoodCalories);
    }
    
    // fetch data after component is loaded
    if (!isLoaded) {
      fetchAllFoodCalories(callback);
    }

    setIsLoaded(true);
    
  }, [isLoaded]);

  const onFoodCalorieChanged = (foodCalorie: FoodCalorie) => {
    addFoodCalorie(foodCalorie, (newFoodCalorie: FoodCalorie) => {
      setFoodCalories([...foodCalories, newFoodCalorie]);
    });
  };

  return (
    <div>
      <Button color="primary" onClick={toggle}>Add</Button>{' '}
      <Link to="/food-calorie">+</Link>
      <FoodInput isOpen={modal} toggle={toggle} onFoodCalorieChanged={onFoodCalorieChanged} />
      <FoodList foodCalories={foodCalories} />
    </div>
  );
};
