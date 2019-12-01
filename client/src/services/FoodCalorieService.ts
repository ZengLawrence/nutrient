import axios, { AxiosResponse } from 'axios';
import { BehaviorSubject, Subscription } from 'rxjs';
import { FoodCalorie } from '../models/FoodCalorie';

const subject = new BehaviorSubject<FoodCalorie>(null as unknown as FoodCalorie);
let observer: Subscription;

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
            subject.next(foodCalorie)
        });
};

export const subscribeNew = (callback: (foodCalorie: FoodCalorie) => void) => {
    observer = subject.subscribe({next: callback});
}

export const unsubscribeNew = () => {
    observer.unsubscribe();
}