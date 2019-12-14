import React, { ChangeEvent, useState, useRef, useEffect } from 'react';
import { Input } from 'reactstrap';

export interface CalorieInputCellProps {
    caloriesPer100g: number,
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void,
}

export const CalorieInputCell = (props: CalorieInputCellProps) => {
    const [editMode, setEditMode] = useState(false);
    const inputEL = useRef<HTMLInputElement>(null);
    
    useEffect(() => {
        if (inputEL.current) {
            inputEL.current.focus();
        }
    });

    return (
        <div onClick={() => setEditMode(true)}>
            {editMode ? (<Input type="number"
                    value={props.caloriesPer100g}
                    onChange={props.handleChange}
                    onBlur={() => setEditMode(false)}
                    innerRef={inputEL}
                    className="text-right"
                />) :
                (<div className="text-right">{props.caloriesPer100g}</div>)}
        </div>
    )
}