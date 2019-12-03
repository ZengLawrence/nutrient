import React from 'react';
import { FoodCalorieInputForm } from './FoodCalorieInputForm';

export const AddFoodCalorieFormContainer = (props: {}) => {

   return (
        <FoodCalorieInputForm foodCalorie={{food: '', caloriesPer100g: 0}}/>
    );
};