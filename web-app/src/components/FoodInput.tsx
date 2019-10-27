import * as React from "react";
import { FoodCalorie } from "../models/FoodCalorie";

export interface FoodInputProps extends FoodCalorie { }

export const FoodInput = (props: FoodInputProps) => {

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
                        <td><input type="text" value={props.food} /></td>
                        <td><input type="text" value={props.foodGroup} /></td>
                        <td><input type="text" value={props.caloriesPer100g} /></td>
                        <td><button>Add</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );

}