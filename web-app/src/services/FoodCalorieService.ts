import { FoodCalorie } from '../models/FoodCalorie';

export const fetchAllFoodCalories = (callback: (foodCalories: FoodCalorie[]) => void) => {

    fetch('/api/food-calories')
        .then((resp) => resp.json())
        .then((data) => callback(data.foodCalories));

};