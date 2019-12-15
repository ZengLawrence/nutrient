import React from 'react';
import { Table } from 'reactstrap';
import EditableCalorieInputCell from '../containers/EditableCalorieInputCell';
import { FoodCalorie } from '../models/FoodCalorie';

const HeaderRow = () => (
    <tr className="text-center p-3 mb-2 bg-light">
        <th className="col-sm-8">Food</th>
        <th className="col-sm-4">Calories/100g</th>
    </tr>
);

const DataRow = (props: { foodCalorie: FoodCalorie }) => {
    const { id, food, caloriesPer100g } = props.foodCalorie;

    return (
        <tr>
            <td>{food}</td>
            <td><EditableCalorieInputCell id={id} value={caloriesPer100g} /></td>
        </tr>

    );
}

export const FoodCalorieList = (props: { foodCalories: FoodCalorie[] }) => {
    return (
        <Table hover>
            <thead>
                <HeaderRow />
            </thead>
            <tbody>
                {props.foodCalories.map(item => (
                    // Without the `key`, React will fire a key warning
                    <DataRow key={item.id} foodCalorie={item} />
                ))}
            </tbody>
        </Table>
    );
};

