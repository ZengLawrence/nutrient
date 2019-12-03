import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { FoodCalorie } from '../models/FoodCalorie';
import * as FoodCalorieService from '../services/FoodCalorieService';

export const FoodInputForm = (props: {foodCalorie : FoodCalorie}) => {

    const { foodCalorie } = props;
    const [food, setFood] = useState(foodCalorie.food);
    const [caloriesPer100g, setCaloriesPer100g] = useState(foodCalorie.caloriesPer100g);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault();
            FoodCalorieService.add({ food, caloriesPer100g });
            toHomePage();
        }

    };

    const history = useHistory();
    const toHomePage = () => {
        history.push('/');
    }

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
                <Button color="secondary" type='button' onClick={(e) => toHomePage()}>Cancel</Button>
            </Form>
        </div>
    );

};