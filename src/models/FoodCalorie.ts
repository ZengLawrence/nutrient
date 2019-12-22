import mongoose from 'mongoose';

export interface IFoodCalorie extends mongoose.Document { 
    food: string,
    foodGroup: string,
    caloriesPer100g: number
}

const foodCalorieSchema = new mongoose.Schema({
    food: { type: String, required: true},
    foodGroup: { type: String, required: true},
    caloriesPer100g: { type: Number, required: true}
});
foodCalorieSchema.set('toJSON', { virtuals: true });

const FoodCalorie = mongoose.model<IFoodCalorie>("FoodCalorie", foodCalorieSchema);
export default FoodCalorie;