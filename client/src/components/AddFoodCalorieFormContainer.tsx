import React from 'react';
import { FoodInputForm } from './FoodInputForm';

export const AddFoodCalorieFormContainer = (props: {}) => {

   return (
        <FoodInputForm foodCalorie={{food: '', caloriesPer100g: 0}}/>
    );
};