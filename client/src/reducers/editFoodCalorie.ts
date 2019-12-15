import { FoodCalorie } from "../models/FoodCalorie";

export default function foodCalories(state : { foodCalorie?: FoodCalorie } = {}, action: any) {
    switch (action.type) {
        case 'EDIT_FOOD_CALORIE_START':
            return { foodCalorie: action.foodCalorie}; 
        case 'EDIT_FOOD_CALORIE_END':
            return {};
        case 'EDIT_FOOD_CALORIE_CHANGE':
            return {...state, 
                foodCalorie: {...state.foodCalorie, ...action.attr},
            }
        default:
            return state
    }
}