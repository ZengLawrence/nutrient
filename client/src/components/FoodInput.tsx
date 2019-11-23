import * as React from 'react';
import { useState } from 'react';
import { FoodCalorie } from '../models/FoodCalorie';
import { Label, Input, Button, Modal, ModalHeader, ModalBody, FormGroup, Form } from 'reactstrap';

const foodGroups = ['Vegetable',
    'Fruit',
    'Carbohydrate',
    'Protein',
    'Fat',
    'Sweet',
];

export interface FoodInputProps {
    onFoodCalorieChanged: (foodCalorie: FoodCalorie) => void,
    isOpen: boolean,
    toggle: () => void
}

export const FoodInput = (props: FoodInputProps) => {

    const isOpen = props.isOpen;
    const toggle = props.toggle;
    
    const [food, setFood] = useState('');
    const [foodGroup, setFoodGroup] = useState('Vegetable');
    const [caloriesPer100g, setCaloriesPer100g] = useState(0);

    const addFoodCalorie = () => {
        let foodCalorie: FoodCalorie = { food: food, foodGroup: foodGroup, caloriesPer100g: caloriesPer100g };
        props.onFoodCalorieChanged(foodCalorie);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        const form = event.currentTarget;
        if (form.checkValidity() === true) {
            addFoodCalorie();
        }

        // do not close modal window
        event.preventDefault();
        event.stopPropagation();
    };
  
    return (
        <div>
            <Modal isOpen={isOpen} toggle={toggle} >
                <ModalHeader toggle={toggle}>Add Calorie</ModalHeader>
                <ModalBody>
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
                        <Button color="secondary" onClick={toggle}>Cancel</Button>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    );

};