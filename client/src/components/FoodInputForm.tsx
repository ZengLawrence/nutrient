import React, { useState } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { FoodCalorie } from '../models/FoodCalorie';
import { addFoodCalorie } from '../services/FoodCalorieService';
import { useHistory } from 'react-router';

const foodGroups = ['Vegetable',
    'Fruit',
    'Carbohydrate',
    'Protein',
    'Fat',
    'Sweet',
];

export interface FoodInputFormProps {
}

export const FoodInputForm = (props: FoodInputFormProps) => {

    const [food, setFood] = useState('');
    const [foodGroup, setFoodGroup] = useState('Vegetable');
    const [caloriesPer100g, setCaloriesPer100g] = useState(0);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault();
            let foodCalorie: FoodCalorie = { food, foodGroup, caloriesPer100g };
            addFoodCalorie(foodCalorie);
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
                    <Label for="foodGroup">Food Group</Label>
                    <Input type="select" id="foodGroup" value={foodGroup} onChange={(e) => setFoodGroup(e.target.value)}>
                        {foodGroups.sort().map((fg) => <option key={fg}>{fg}</option>)}
                    </Input>
                </FormGroup>
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