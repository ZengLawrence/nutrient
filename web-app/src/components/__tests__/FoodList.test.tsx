import React from 'react';
import { render } from '@testing-library/react';
import { FoodList } from '../FoodList';
import { FoodCalorie } from '../../models/FoodCalorie';

it('renders empty food calorie list', () => {
  const { asFragment } = render(<FoodList foodCalories={[]} />);
  expect(asFragment()).toMatchSnapshot();
});

it('renders food calorie list with 3 food items', () => {
    const foodCalories: FoodCalorie[] = [
        {food: 'Orange', foodGroup: 'Fruit', caloriesPer100g: 47},
        {food: 'Sliced Bread', foodGroup: 'Carbohydrate', caloriesPer100g: 90},
        {food: 'Chicken Breast', foodGroup: 'Protein', caloriesPer100g: 110},
    ];
    const { asFragment } = render(<FoodList foodCalories={foodCalories} />);
    expect(asFragment()).toMatchSnapshot();
  });