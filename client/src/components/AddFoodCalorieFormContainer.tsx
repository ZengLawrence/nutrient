import React from 'react';
import * as FoodCalorieService from '../services/FoodCalorieService';
import { FoodCalorieInputForm } from './FoodCalorieInputForm';

export const AddFoodCalorieFormContainer = (props: {}) => {

    const add = (food: string, caloriesPer100g: number) => {
        FoodCalorieService.add({ food, caloriesPer100g });
    }

    return (
        <FoodCalorieInputForm add={add} />
    );
};