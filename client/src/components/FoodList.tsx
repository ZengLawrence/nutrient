import * as React from 'react';
import { FoodCalorie } from '../models/FoodCalorie';
import { Table } from 'reactstrap';

export interface FoodListProps {
    foodCalories: FoodCalorie[]
}

export const FoodList = (props: FoodListProps) => {
    return (
        <Table hover>
            <thead>
                <tr className="text-center p-3 mb-2 bg-light">
                    <th className="col-sm-8">Food</th>
                    <th className="col-sm-4">Calories/100g</th>
                </tr>
            </thead>
            <tbody>
                {props.foodCalories.map(item => (
                    // Without the `key`, React will fire a key warning
                    <React.Fragment key={item._id}>
                        <tr>
                            <td>{item.food}</td>
                            <td className="text-right">{item.caloriesPer100g}</td>
                        </tr>
                    </React.Fragment>
                ))}
            </tbody>
        </Table>
    );
};

