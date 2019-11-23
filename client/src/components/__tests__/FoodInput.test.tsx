import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { FoodCalorie } from '../../models/FoodCalorie';
import { FoodInput } from '../FoodInput';

it('click on Cancel to close form', () => {
    const onFoodCalorieChanged = (foodCalorie: FoodCalorie) => {};
    const toggle = jest.fn();

    const { getByText }  = render(<FoodInput onFoodCalorieChanged={onFoodCalorieChanged} isOpen={true} toggle={toggle}/>);

    fireEvent.click(getByText('Cancel'));
    expect(toggle).toBeCalledTimes(1);
});

it('click on Add to add a food calorie, but form stays open e.g. no call on toggle()', () => {
    const onFoodCalorieChanged = jest.fn((foodCalorie: FoodCalorie) => {});
    const toggle = jest.fn();

    const { getByText, getByLabelText }  = render(<FoodInput onFoodCalorieChanged={onFoodCalorieChanged} isOpen={true} toggle={toggle}/>);

    const foodGroup = 'Carbohydrate';
    fireEvent.change(getByLabelText('Food Group'), { target: { value: foodGroup } });

    const food = 'Sliced Bread';
    fireEvent.change(getByLabelText('Food'), { target: { value: food } });
    const calorie = 110;
    fireEvent.change(getByLabelText('Calories per 100g'), { target: { value: calorie } });

    fireEvent.click(getByText('Add'));

    expect(onFoodCalorieChanged).toBeCalledWith({foodGroup: foodGroup, food: food, caloriesPer100g: calorie});
    expect(toggle).toBeCalledTimes(0);
});

it('click on Add to add a food calorie, but did not select food group, should default to vegetable', () => {
    const onFoodCalorieChanged = jest.fn((foodCalorie: FoodCalorie) => {});
    const toggle = jest.fn();

    const { getByText, getByLabelText }  = render(<FoodInput onFoodCalorieChanged={onFoodCalorieChanged} isOpen={true} toggle={toggle}/>);

    const food = 'Broccoli';
    fireEvent.change(getByLabelText('Food'), { target: { value: food } });
    const calorie = 35;
    fireEvent.change(getByLabelText('Calories per 100g'), { target: { value: calorie } });

    fireEvent.click(getByText('Add'));

    expect(onFoodCalorieChanged).toBeCalledWith({foodGroup: 'Vegetable', food: food, caloriesPer100g: calorie});
    expect(toggle).toBeCalledTimes(0);
});
