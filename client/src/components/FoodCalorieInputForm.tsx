import React, { useState, useRef } from 'react';
import { Col, Form, FormFeedback, FormGroup, Input, Label, Row } from 'reactstrap';

const ENTER_KEY = 13;

export interface FoodCalorieInputFormProps {
    add: (food: string, caloriesPer100g: number) => void,
};

export const FoodCalorieInputForm = (props: FoodCalorieInputFormProps) => {

    const { add } = props;
    const [food, setFood] = useState('');
    const [caloriesPer100g, setCaloriesPer100g] = useState(0);

    const [foodInputInvalid, setFoodInputInvalid] = useState(false);
    function validate() {
        const foodValid = (food.length > 0);
        setFoodInputInvalid(!foodValid);
        return foodValid;
    }

    const firstInputRef = useRef<HTMLInputElement>(null);
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.keyCode === ENTER_KEY && validate()) {
            add(food, caloriesPer100g);
            setFood('');
            setCaloriesPer100g(0);
            if (firstInputRef && firstInputRef.current){
                firstInputRef.current.focus();
            }
        }
    }

    return (
        <Form autoComplete="off">
            <Row form>
                <Col sm={8}>
                    <FormGroup>
                        <Label for="food">Food</Label>
                        <Input invalid={foodInputInvalid}
                            placeholder="Broccoli"
                            id="food"
                            value={food}
                            innerRef={firstInputRef}
                            onKeyDown={handleKeyDown}
                            onChange={(e) => setFood(e.target.value)}
                        />
                        <FormFeedback>Please enter a food</FormFeedback>
                    </FormGroup>
                </Col>
                <Col sm={4}>
                    <FormGroup>
                        <Label for="calorie">Calories/100g</Label>
                        <Input type="number"
                            id="calorie" value={caloriesPer100g}
                            className="col-sm-6"
                            onKeyDown={handleKeyDown}
                            onChange={(e) => setCaloriesPer100g(parseInt(e.target.value))}
                        />
                    </FormGroup>
                </Col>
            </Row>
        </Form>
    );

};