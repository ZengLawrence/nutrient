import React from 'react';
import { FoodCalorieInputForm } from './FoodCalorieInputForm';
import { useHistory } from 'react-router';
import * as FoodCalorieService from '../services/FoodCalorieService';

export const AddFoodCalorieFormContainer = (props: {}) => {

    const history = useHistory();
    const toHomePage = () => {
        history.push('/');
    }

    const add = (food: string, caloriesPer100g: number) => {
        FoodCalorieService.add({ food, caloriesPer100g });
        toHomePage();
    }

   return (
        <FoodCalorieInputForm foodCalorie={{food: '', caloriesPer100g: 0}} add={add} cancel={toHomePage}/>
    );
};