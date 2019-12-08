import { FoodCalorie } from "../models/FoodCalorie";

export const addFoodCalorie = (foodCalorie : FoodCalorie) => ({
  type: 'ADD_FOOD_CALORIE',
  foodCalorie
})

export const refreshFoodCalories = (foodCalories : FoodCalorie[]) => ({
  type: 'REFRESH_FOOD_CALORIES',
  foodCalories
})
