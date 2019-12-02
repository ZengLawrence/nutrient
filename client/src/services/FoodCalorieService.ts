import axios, { AxiosResponse } from 'axios';
import { FoodCalorie } from '../models/FoodCalorie';

export const fetchAll = (callback: (foodCalories: FoodCalorie[]) => void) => {

    axios.get('/api/food-calories')
        .then(function (resp: AxiosResponse<{foodCalories: FoodCalorie[]}>) {
            callback(resp.data.foodCalories);
        });

};

export const add = (foodCalorie: FoodCalorie, callback = (foodCalorie: FoodCalorie) => {}) => {
    axios.post('/api/food-calories', foodCalorie)
        .then( res => res.data)
        .then( foodCalorie => {
            callback(foodCalorie);
        });
};
