import React, { useState } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { FoodCalorie } from '../models/FoodCalorie';

export interface FoodCalorieInputFormProps {
    foodCalorie : FoodCalorie,
    add : (food: string, caloriesPer100g: number) => void,
    cancel : () => void
};

export const FoodCalorieInputForm = (props: FoodCalorieInputFormProps) => {

    const { foodCalorie, add, cancel } = props;
    const [food, setFood] = useState(foodCalorie.food);
    const [caloriesPer100g, setCaloriesPer100g] = useState(foodCalorie.caloriesPer100g);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        const form = event.currentTarget;
        event.preventDefault();
        if (form.checkValidity() === true) {
            add(food, caloriesPer100g);
        } else {
            event.stopPropagation();
        }

    };

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="food">Food</Label>
                    <Input required placeholder="Broccoli" id="food" value={food} onChange={(e) => setFood(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label for="calorie">Calories per 100g</Label>
                    <Input type="number" id="calorie" value={caloriesPer100g} onChange={(e) => setCaloriesPer100g(parseInt(e.target.value))} />
                </FormGroup>
                <Button color="primary" type='submit'>Add</Button>{' '}
                <Button color="secondary" type='button' onClick={cancel}>Cancel</Button>
            </Form>
        </div>
    );

};