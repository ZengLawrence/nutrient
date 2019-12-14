import React, { ChangeEvent } from 'react';
import { Input } from 'reactstrap';

export interface CalorieInputCellProps {
    caloriesPer100g: number,
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void,
}

export const CalorieInputCell = (props: CalorieInputCellProps) => (
    <Input type="number"
        value={props.caloriesPer100g}
        onChange={props.handleChange}
        className="text-right"
    />
)
