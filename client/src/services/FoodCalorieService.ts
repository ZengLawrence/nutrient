import { AxiosResponse } from 'axios';
import { FoodCalorie } from '../models/FoodCalorie';
import axios from 'axios';

export const fetchAll = (callback: (foodCalories: FoodCalorie[]) => void) => {

    axios.get('/api/food-calories')
        .then(function (resp: AxiosResponse<{foodCalories: FoodCalorie[]}>) {
            callback(resp.data.foodCalories);
        });

};

export const add = (foodCalorie: FoodCalorie, callback = (foodCalorie: FoodCalorie) => {}) => {
    axios.post('/api/food-calories', foodCalorie)
        .then(function (resp: AxiosResponse<FoodCalorie>) {
            console.log(resp.data);
            callback(resp.data);
        });
};