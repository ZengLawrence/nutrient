import React, { useState } from 'react';
import { Table } from 'reactstrap';
import EditableCalorieInput from '../containers/EditableCalorieInput';
import { FoodCalorie } from '../models/FoodCalorie';

const HeaderRow = () => (
    <tr className="text-center p-3 mb-2 bg-light">
        <th className="col-sm-8">Food</th>
        <th className="col-sm-4">Calories/100g</th>
    </tr>
);

const DataRow = (props: { foodCalorie: FoodCalorie }) => {
    const { id, food, caloriesPer100g } = props.foodCalorie;
    const [edit, setEdit] = useState(false);

    return (
        <tr onMouseEnter={()=>setEdit(true)} onMouseLeave={()=>setEdit(false)}>
            <td>{food}</td>
            <td>
                {edit ? <EditableCalorieInput type="number" id={id} value={caloriesPer100g} className="text-right"/> :
                <div className="text-right">{caloriesPer100g}</div>
                }
            </td>
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

