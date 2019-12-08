import React, { useState } from 'react';
import { Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';

const ENTER_KEY = 13;

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
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.keyCode === ENTER_KEY) {
            add(food, caloriesPer100g);
            setFood('');
            setCaloriesPer100g(0);
        }
    }

    return (
        <Form>
            <Row form>
                <Col sm={8}>
                    <FormGroup>
                        <Label for="food">Food</Label>
                        <Input required placeholder="Broccoli" id="food" value={food} onKeyDown={handleKeyDown} onChange={(e) => setFood(e.target.value)} />
                    </FormGroup>
                </Col>
                <Col sm={4}>
                    <FormGroup>
                        <Label for="calorie">Calories/100g</Label>
                        <Input type="number" id="calorie" value={caloriesPer100g} className="col-sm-6" onKeyDown={handleKeyDown} onChange={(e) => setCaloriesPer100g(parseInt(e.target.value))} />
                    </FormGroup>
                </Col>
            </Row>
        </Form>
    );

};