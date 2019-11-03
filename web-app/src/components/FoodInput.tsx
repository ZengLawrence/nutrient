import * as React from "react";
import { useState } from "react";
import { FoodCalorie } from "../models/FoodCalorie";
import { Label, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export interface FoodInputProps {
    onFoodCalorieChanged: (foodcalorie: FoodCalorie) => void
}

export const FoodInput = (props: FoodInputProps) => {

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const [food, setFood] = useState("");
    const [foodGroup, setFoodGroup] = useState("");
    const [caloriesPer100g, setCaloriesPer100g] = useState(0);

    const addFoodCalorie = () => {
        let foodCalorie: FoodCalorie = { food: food, foodGroup: foodGroup, caloriesPer100g: caloriesPer100g };
        props.onFoodCalorieChanged(foodCalorie);
    }

    return (
        <div>
            <Button color="primary" onClick={toggle}>Add</Button>

            <Modal isOpen={modal} toggle={toggle} >
                <ModalHeader toggle={toggle}>Add Calorie</ModalHeader>
                <ModalBody>
                <Label for="foodGroup">Food Group</Label>
                <Input type="select" id="foodGroup" value={foodGroup} onChange={(e) => setFoodGroup(e.target.value)}>
                    <option>Vegetable</option>
                    <option>Fruit</option>
                    <option>Carbohydrate</option>
                    <option>Potein</option>
                    <option>Fat</option>
                    <option>Sweet</option>
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

}