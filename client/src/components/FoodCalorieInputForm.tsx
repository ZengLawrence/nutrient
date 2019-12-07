import React, { useState } from 'react';
import { Button, Form, FormGroup, Input, Label, InputGroupAddon, InputGroupText } from 'reactstrap';

export interface FoodCalorieInputFormProps {
    add: (food: string, caloriesPer100g: number) => void,
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
            <Form inline onSubmit={handleSubmit}>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="food" className="mr-sm-2">Food</Label>
                    <Input required placeholder="Broccoli" id="food" value={food} onChange={(e) => setFood(e.target.value)} />
                </FormGroup>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="calorie" className="mr-sm-2">Calories</Label>
                    <Input type="number" id="calorie" value={caloriesPer100g} className="mr-sm-1" onChange={(e) => setCaloriesPer100g(parseInt(e.target.value))} />
                    <InputGroupAddon addonType="append">
                        <InputGroupText>/100g</InputGroupText>
                    </InputGroupAddon>
                </FormGroup>
                <Button color="primary" type='submit'>Add</Button>
            </Form>
        </div>
    );

};