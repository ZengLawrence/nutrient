import React, { ChangeEvent, useState, useRef, useEffect, FocusEvent } from 'react';
import { Input } from 'reactstrap';

export interface CalorieInputCellProps {
    id: string,
    value: number,
    handleChange?: (event: ChangeEvent<HTMLInputElement>) => void,
    handleFocus?: (event: FocusEvent<HTMLInputElement>) => void,
    handleBlur?: (event: FocusEvent<HTMLInputElement>) => void,
}

export const CalorieInputCell = (props: CalorieInputCellProps) => {
    const [editMode, setEditMode] = useState(false);
    const inputEL = useRef<HTMLInputElement>(null);
    
    const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
        setEditMode(false);
        if (props.handleBlur) {
            props.handleBlur(e);
        }        
    }

    useEffect(() => {
        if (inputEL.current) {
            inputEL.current.focus();
        }
    });

    return (
        <div onClick={() => setEditMode(true)}>
            {editMode ? (<Input type="number"
                    value={props.value || ''}
                    onChange={props.handleChange}
                    onFocus={props.handleFocus}
                    onBlur={handleBlur}
                    innerRef={inputEL}
                    className="text-right"
                />) :
                (<div className="text-right">{props.value}</div>)}
        </div>
    )
}