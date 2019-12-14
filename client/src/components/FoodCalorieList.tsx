import React from 'react';
import { Table } from 'reactstrap';
import { FoodCalorie } from '../models/FoodCalorie';
import { CalorieInputCell } from './CalorieInputCell';

export const FoodCalorieList = (props: { foodCalories: FoodCalorie[] }) => {
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
                    <React.Fragment key={item.id}>
                        <tr>
                            <td>{item.food}</td>
                            <td><CalorieInputCell caloriesPer100g={item.caloriesPer100g} handleChange={() => {}}/></td>
                        </tr>
                    </React.Fragment>
                ))}
            </tbody>
        </Table>
    );
};

