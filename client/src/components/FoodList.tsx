import * as React from 'react';
import { FoodCalorie } from '../models/FoodCalorie';
import { Table } from 'reactstrap';

export interface FoodListProps {
    foodCalories: FoodCalorie[]
}

export const FoodList = (props: FoodListProps) => {
    return (
        <Table>
            <thead>
                <tr>
                    <th>Food</th>
                    <th>Calories per 100g</th>
                </tr>
            </thead>
            <tbody>
                {props.foodCalories.map(item => (
                    // Without the `key`, React will fire a key warning
                    <React.Fragment key={item._id}>
                        <tr>
                            <td>{item.food}</td>
                            <td>{item.caloriesPer100g}</td>
                        </tr>
                    </React.Fragment>
                ))}
            </tbody>
        </Table>
    );
};

