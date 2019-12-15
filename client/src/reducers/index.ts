import { combineReducers } from 'redux';
import { foodCalories } from './foodCalories';
import editFoodCalorie from './editFoodCalorie'

export const rootReducer = combineReducers({
    foodCalories,
    editFoodCalorie,
})