import * as React from 'react';
import { FoodCalorie } from '../models/FoodCalorie';

export interface FoodListProps {
    foodCalories: FoodCalorie[]
}

export const FoodList = (props: FoodListProps) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Food</th>
                    <th>Food Group</th>
                    <th>Calries per 100g</th>
                </tr>
            </thead>
            <tbody>
                {props.foodCalories.map(item => (
                    // Without the `key`, React will fire a key warning
                    <React.Fragment key={item.food}>
                        <tr>
                            <td>{item.food}</td>
                            <td>{item.foodGroup}</td>
                            <td>{item.caloriesPer100g}</td>
                        </tr>
                    </React.Fragment>
                ))}
            </tbody>
        </table>
    );
}

