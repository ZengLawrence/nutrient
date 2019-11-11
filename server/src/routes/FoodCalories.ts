import {Response, Request} from 'express';
import { FoodCalorie } from '../models/FoodCalorie';

export const foodCaloriesRoute = (req: Request, resp: Response) => {
    const foodCalories: FoodCalorie[] = [
        {foodGroup: 'Vegetable', food: 'Broccoli', caloriesPer100g: 35},
        {foodGroup: 'Fruit', food: 'Orange', caloriesPer100g: 47},
        {foodGroup: 'Carbohydrate', food: 'Sliced Bread', caloriesPer100g: 110},
    ];
    resp.send( {foodCalories: foodCalories} );
};