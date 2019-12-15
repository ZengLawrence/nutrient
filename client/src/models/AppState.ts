import { FoodCalorie } from './FoodCalorie';

export interface EditFoodCalorie {
    foodCalorie: FoodCalorie
}

export interface AppState {
    foodCalories: FoodCalorie[],
    editFoodCalorie: EditFoodCalorie,
}