import { Router } from 'express';
import {Response, Request} from 'express';
import { FoodCalorie } from '../models/FoodCalorie';

const foodCalories: FoodCalorie[] = [
    {foodGroup: 'Vegetable', food: 'Broccoli', caloriesPer100g: 35},
    {foodGroup: 'Fruit', food: 'Orange', caloriesPer100g: 47},
    {foodGroup: 'Carbohydrate', food: 'Sliced Bread', caloriesPer100g: 110},
];

export const register = (router: Router) => {
    router.get( '/api/food-calories', foodCaloriesRoute );

    return router;
};

const foodCaloriesRoute = (req: Request, resp: Response) => {
    resp.json( {foodCalories: foodCalories} );
};