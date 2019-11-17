import mongoose from 'mongoose';

export interface IFoodCalorie extends mongoose.Document { 
    food: string,
    foodGroup: string,
    caloriesPer100g: number
}

export const FoodCalorieSchema = new mongoose.Schema({
    food: { type: String, required: true},
    foodGroup: { type: String, required: true},
    caloriesPer100g: { type: Number, required: true}
});

const FoodCalorie = mongoose.model<IFoodCalorie>("FoodCalorie", FoodCalorieSchema);
export default FoodCalorie;