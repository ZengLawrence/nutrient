import { FoodCalorie } from "../models/FoodCalorie"

export const foodCalories = (state: FoodCalorie[] = [], action: any) => {
    switch (action.type) {
        case 'ADD_FOOD_CALORIE':
            return [
                ...state,
                action.foodCalorie
            ]
        case 'REFRESH_FOOD_CALORIES':
            return [...action.foodCalories];
        default:
            return state
    }
}
