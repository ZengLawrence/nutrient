import React, { useEffect, useState } from 'react';
import { Alert } from 'reactstrap';
import { FoodCalorie } from '../models/FoodCalorie';
import * as FoodCalorieService from '../services/FoodCalorieService';
import { AddFoodCalorieFormContainer } from './AddFoodCalorieFormContainer';
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
        <Alert color="light">Loading...</Alert>
      </div>
    );
  }

}

export const Home = () => {

  const [isMounted, setIsMounted] = useState(false);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [foodCalories, setFoodCalories] = useState([] as FoodCalorie[]);

  useEffect( () => {

    function callback(initialFoodCalories: FoodCalorie[]) {
      setFoodCalories(initialFoodCalories);
      setIsDataLoaded(true);
    }
    
    // fetch data after component is mounted
    if (!isMounted) {
      FoodCalorieService.fetchAll(callback);
    }

    setIsMounted(true);

  }, [isMounted, foodCalories]);


  return (
    <div>
      <AddFoodCalorieFormContainer />
      <ShowFoodList isDataLoaded={isDataLoaded} foodCalories={foodCalories}/>
    </div>
  );
};
