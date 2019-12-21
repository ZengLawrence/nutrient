import axios, { AxiosResponse } from 'axios';
import { FoodCalorie } from '../models/FoodCalorie';

export const fetchAll = () => {

    return axios.get('/api/food-calories')
        .then((resp : AxiosResponse<{foodCalories: FoodCalorie[]}>) => resp.data.foodCalories);

};

export const add = (foodCalorie: {food : string, caloriesPer100g : number}, callback = (foodCalorie: FoodCalorie) => {}) => {
    axios.post('/api/food-calories', foodCalorie)
        .then( res => res.data)
        .then( foodCalorie => {
            callback(foodCalorie);
        });
};
