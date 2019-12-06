import React, { useState } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';

export interface FoodCalorieInputFormProps {
    add : (food: string, caloriesPer100g: number) => void,
};

export const FoodCalorieInputForm = (props: FoodCalorieInputFormProps) => {

    const { add } = props;
    const [food, setFood] = useState('');
    const [caloriesPer100g, setCaloriesPer100g] = useState(0);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        const form = event.currentTarget;
        event.preventDefault();
        if (form.checkValidity() === true) {
            add(food, caloriesPer100g);
            setFood('');
            setCaloriesPer100g(0);
        } else {
            event.stopPropagation();
        }

    };

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Input required placeholder="Food" id="food" value={food} onChange={(e) => setFood(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Input type="number" id="calorie" value={caloriesPer100g} onChange={(e) => setCaloriesPer100g(parseInt(e.target.value))} />
                </FormGroup>
                <Button color="primary" type='submit'>Add</Button>
            </Form>
        </div>
    );

};