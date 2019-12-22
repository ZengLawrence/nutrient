import { FoodCalorie } from "../models/FoodCalorie";

export const foodCalories = (state: FoodCalorie[] = [], action: any) => {
    switch (action.type) {
        case 'ADD_FOOD_CALORIE':
            return [
                ...state,
                action.foodCalorie
            ]
        case 'UPDATE_FOOD_CALORIE':
            return state.map( foodCalorie => {
                if (foodCalorie.id === action.attr.id) {
                    return {...foodCalorie, ...action.attr};
                } else {
                    return foodCalorie;
                }
            });
        case 'FOOD_CALORIE_DELETED':
            return state.filter(foodCalorie => foodCalorie.id !== action.id);
        case 'REFRESH_FOOD_CALORIES':
            return [...action.foodCalories];
        default:
            return state
    }
}
