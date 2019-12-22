import axios, { AxiosResponse } from 'axios';
import { FoodCalorie } from '../models/FoodCalorie';

export const getAll = async () => {
    const resp: AxiosResponse<{foodCalories: FoodCalorie[]}> = await axios.get('/api/food-calories');
    return resp.data.foodCalories;
};

export const post = async (attributes: { food: string, caloriesPer100g: number }) => {
    const resp: AxiosResponse<{foodCalorie: FoodCalorie}> = await axios.post('/api/food-calories', {
        data: {
            type: 'foodCalorie',
            attributes,
        },
    });
    return resp.data.foodCalorie;
};

export const del =  async (id: string) => {
    const resp: AxiosResponse = await axios.delete(`/api/food-calories/${id}`);
    return resp.status === 204;  // no content
}
