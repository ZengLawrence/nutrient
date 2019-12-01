import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Alert, Button } from 'reactstrap';
import { FoodCalorie } from '../models/FoodCalorie';
import * as FoodCalorieService from '../services/FoodCalorieService';
import { FoodInput } from './FoodInput';
import { FoodList } from './FoodList';
import _ from 'lodash';

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

export interface HomeProps {
}

export const Home = (props: HomeProps) => {

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const [isMounted, setIsMounted] = useState(false);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [foodCalories, setFoodCalories] = useState([] as FoodCalorie[]);

  const [status, setStatus] = useState('');

  useEffect( () => {

    function callback(initialFoodCalories: FoodCalorie[]) {
      setFoodCalories(initialFoodCalories);
      setIsDataLoaded(true);
    }
    
    function handleNew(newFoodCalorie: FoodCalorie) {
      if (newFoodCalorie) {
        const food = newFoodCalorie.food;
        setStatus(`New calorie for ${food}`);

        if (_.findIndex(foodCalories, {'_id': newFoodCalorie._id}) === -1) {
          setFoodCalories([...foodCalories, newFoodCalorie]);
        }
      }
    }

    // fetch data after component is mounted
    if (!isMounted) {
      FoodCalorieService.fetchAll(callback);
    }
    FoodCalorieService.subscribeNew(handleNew);

    setIsMounted(true);

    return function cleanUp() {
        FoodCalorieService.unsubscribeNew();
    };
    
  }, [isMounted, foodCalories, status]);

  const onFoodCalorieChanged = (foodCalorie: FoodCalorie) => {
    FoodCalorieService.add(foodCalorie, (newFoodCalorie: FoodCalorie) => {
      setFoodCalories([...foodCalories, newFoodCalorie]);
    });
  };

  return (
    <div>
      <Alert color='info'>{status}</Alert>
      <Button color="primary" onClick={toggle}>Add</Button>{' '}
      <Link to="/food-calorie">+</Link>
      <FoodInput isOpen={modal} toggle={toggle} onFoodCalorieChanged={onFoodCalorieChanged} />
      <ShowFoodList isDataLoaded={isDataLoaded} foodCalories={foodCalories}/>
    </div>
  );
};
