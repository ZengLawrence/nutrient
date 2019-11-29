import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Alert } from 'reactstrap';
import { FoodCalorie } from '../models/FoodCalorie';
import * as FoodCalorieService from '../services/FoodCalorieService';
import { FoodInput } from './FoodInput';
import { FoodList } from './FoodList';

function ShowFoodList(props: {
  isDataLoaded: boolean,
  foodCalories: FoodCalorie[]
}) {
  if (props.isDataLoaded) {
    return (
      <div>
        <FoodList foodCalories={props.foodCalories} />
      </div>
    );
  } else {
    return (
      <div>
        <Alert color="light">
          Loading...
              </Alert>
      </div>
    );
  }

}

export interface HomeProps {
}

export const Home = (props: HomeProps) => {

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const [isLoaded, setIsLoaded] = useState(false);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [foodCalories, setFoodCalories] = useState([] as FoodCalorie[]);

  useEffect( () => {

    function callback(initialFoodCalories: FoodCalorie[]) {
      setFoodCalories(initialFoodCalories);
      setIsDataLoaded(true);
    }
    
    // fetch data after component is loaded
    if (!isLoaded) {
      FoodCalorieService.fetchAll(callback);
    }

    setIsLoaded(true);
    
  }, [isLoaded]);

  const onFoodCalorieChanged = (foodCalorie: FoodCalorie) => {
    FoodCalorieService.add(foodCalorie, (newFoodCalorie: FoodCalorie) => {
      setFoodCalories([...foodCalories, newFoodCalorie]);
    });
  };

  return (
    <div>
      <Button color="primary" onClick={toggle}>Add</Button>{' '}
      <Link to="/food-calorie">+</Link>
      <FoodInput isOpen={modal} toggle={toggle} onFoodCalorieChanged={onFoodCalorieChanged} />
      <ShowFoodList isDataLoaded={isDataLoaded} foodCalories={foodCalories}/>
    </div>
  );
};
