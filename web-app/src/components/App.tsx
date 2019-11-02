import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { FoodInput } from "./FoodInput";
import { FoodList } from "./FoodList";
import { FoodCalorie } from '../models/FoodCalorie';

export interface AppProps {
  foodCalories?: FoodCalorie[];
};

let emptyFoodCalories: FoodCalorie[] = [];

export const App = (props: AppProps) => {

  const [foodCalories, setFoodCalories] = useState(emptyFoodCalories);

  const AddFoodCalorie = (foodCalorie: FoodCalorie) => {
    setFoodCalories([...foodCalories, foodCalorie]);
  }

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="primary" onClick={toggle}>Add</Button>

      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Add Calorie</ModalHeader>
        <ModalBody>
          <FoodInput addFoooCalorie={AddFoodCalorie} />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Add</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>

      <FoodList foodCalories={foodCalories} />
    </div>
  );
}
