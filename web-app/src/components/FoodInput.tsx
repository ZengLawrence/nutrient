import * as React from 'react';
import { useState } from 'react';
import { FoodCalorie } from '../models/FoodCalorie';
import { Label, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const foodGroups = ['Vegetable',
    'Fruit',
    'Carbohydrate',
    'Potein',
    'Fat',
    'Sweet',
];

export interface FoodInputProps {
    onFoodCalorieChanged: (foodcalorie: FoodCalorie) => void,
    isOpen: boolean,
    toggle: () => void
}

export const FoodInput = (props: FoodInputProps) => {

    const isOpen = props.isOpen;
    const toggle = props.toggle;
    
    const [food, setFood] = useState('');
    const [foodGroup, setFoodGroup] = useState('');
    const [caloriesPer100g, setCaloriesPer100g] = useState(0);

    const addFoodCalorie = () => {
        let foodCalorie: FoodCalorie = { food: food, foodGroup: foodGroup, caloriesPer100g: caloriesPer100g };
        props.onFoodCalorieChanged(foodCalorie);
    };

    return (
        <div>
            <Modal isOpen={isOpen} toggle={toggle} >
                <ModalHeader toggle={toggle}>Add Calorie</ModalHeader>
                <ModalBody>
                    <Label for="foodGroup">Food Group</Label>
                    <Input type="select" id="foodGroup" value={foodGroup} onChange={(e) => setFoodGroup(e.target.value)}>
                        {foodGroups.sort().map( (fg) => <option key={fg}>{fg}</option>)}
                    </Input>
                    <br />
                    <Label for="food">Food</Label>
                    <Input placeholder="Orange" id="food" value={food} onChange={(e) => setFood(e.target.value)} />
                    <br />
                    <Label for="calorie">Calories per 100g</Label>
                    <Input type="number" id="calorie" value={caloriesPer100g} onChange={(e) => setCaloriesPer100g(parseInt(e.target.value))} />
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={addFoodCalorie}>Add</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );

};