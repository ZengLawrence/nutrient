import * as React from "react";
import {useState} from "react";
import { FoodCalorie } from "../models/FoodCalorie";

export interface FoodInputProps extends FoodCalorie { 
    addFoooCalorie: (foodcalorie: FoodCalorie) => void
}

function onClick() {
    console.log("clicked on {food}");
}

export const FoodInput = (props: FoodInputProps) => {

    const [food, setFood] = useState(props.food);
    const [foodGroup, setFoodGroup] = useState(props.foodGroup);
    const [caloriesPer100g, setCaloriesPer100g] = useState(props.caloriesPer100g);

    const addFoodCalorie = () => {
        let foodCalorie : FoodCalorie = {food: food, foodGroup: foodGroup, caloriesPer100g: caloriesPer100g};
        props.addFoooCalorie(foodCalorie);
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Food</th>
                        <th>Food Group</th>
                        <th>Calries per 100g</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><input type="text" defaultValue={props.food} onChange={(e) => setFood(e.target.value)}/></td>
                        <td><input type="text" defaultValue={props.foodGroup} onChange={(e) => setFoodGroup(e.target.value)} /></td>
                        <td><input type="text" defaultValue={props.caloriesPer100g} onChange={(e) => setCaloriesPer100g(parseFloat(e.target.value))} /></td>
                        <td><button onClick={() => addFoodCalorie()}>Add</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );

}