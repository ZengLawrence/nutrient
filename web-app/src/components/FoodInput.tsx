import * as React from "react";

export interface FoodInputProps { 
    food? : string,
    foodGroup?: string,
    caloriesPer100g? : number
}

export const FoodInput = (props: FoodInputProps) => {
    
    return (
        <div>
            <table>
                <tr>
                    <th>Food</th>
                    <th>Food Group</th>
                    <th>Calries per 100g</th>
                </tr>
                <tr>
                    <td><input type="text" value={props.food}/></td>
                    <td><input type="text" value={props.foodGroup}/></td>
                    <td><input type="text" value={props.caloriesPer100g}/></td>
                    <td><button>Add</button></td>
                </tr>
            </table>
        </div>
    );

}