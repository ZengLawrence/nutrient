import * as React from "react";

export interface FoodInputProps { 
    food? : string,
    foodGroup?: string,
    caloriesPer100g? : number
}

export const FoodInput = (props: FoodInputProps) => {
    return (
        <div>
            <input id="food" type="text" value={props.food}/>
            <input id="food_group" type="text" value={props.foodGroup}/>
            <input id="calories" type="text" value={props.caloriesPer100g}/>
            <button>Add</button>
        </div>
    );

}