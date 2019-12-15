import { FoodCalorie } from "../models/FoodCalorie";

export const addFoodCalorie = (foodCalorie : FoodCalorie) => ({
  type: 'ADD_FOOD_CALORIE',
  foodCalorie
})

export const refreshFoodCalories = (foodCalories : FoodCalorie[]) => ({
  type: 'REFRESH_FOOD_CALORIES',
  foodCalories
})

// edit food calorie
export const editFoodCalorieStart = (foodCalorie : any) => ({
  type: 'EDIT_FOOD_CALORIE_START',
  foodCalorie
})

export const editFoodCalorieChange = (attr : any) => ({
  type: 'EDIT_FOOD_CALORIE_CHANGE',
  attr
})

export const editFoodCalorieEnd = () => ({
  type: 'EDIT_FOOD_CALORIE_END'
})
