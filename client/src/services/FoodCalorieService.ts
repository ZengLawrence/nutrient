import axios, { AxiosResponse } from 'axios';
import { FoodCalorie } from '../models/FoodCalorie';

export const fetchAll = async () => {
    const resp: AxiosResponse<{foodCalories: FoodCalorie[]}> = await axios.get('/api/food-calories');
    return resp.data.foodCalories;
};

export const add = async (foodCalorie: { food: string, caloriesPer100g: number }) => {
    const resp: AxiosResponse<FoodCalorie> = await axios.post('/api/food-calories', foodCalorie);
    return resp.data;
};
