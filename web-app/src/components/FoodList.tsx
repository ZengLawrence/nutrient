import * as React from 'react';
import { FoodCalorie } from '../models/FoodCalorie';

export interface FoodListProps {
    foodCalories: FoodCalorie[]
}

export const FoodList = (props: FoodListProps) => {
    return (
        <table>
            <tr>
                <th>Food</th>
                <th>Food Group</th>
                <th>Calries per 100g</th>
            </tr>
            {props.foodCalories.map(item => (
                // Without the `key`, React will fire a key warning
                <tr>
                    <React.Fragment key={item.food}>
                        <td><input type="text" value={item.food} /></td>
                        <td><input type="text" value={item.foodGroup} /></td>
                        <td><input type="text" value={item.caloriesPer100g} /></td>
                    </React.Fragment>
                </tr>
            ))}
        </table>
    );
}

