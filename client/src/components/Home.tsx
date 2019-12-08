import React from 'react';
import AddFoodCalorie from '../containers/AddFoodCalorie';
import VisibleFoodCalorieList from '../containers/VisibleFoodCalorieList';

export const Home = () => {

  return (
    <div>
      <AddFoodCalorie />
      <VisibleFoodCalorieList />
    </div>
  );
};
