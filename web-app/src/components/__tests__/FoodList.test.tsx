import React from 'react';
import { render } from '@testing-library/react';
import { FoodList } from '../FoodList';

it('renders empty food calorie list', () => {
  const { asFragment } = render(<FoodList foodCalories={[]} />);
  expect(asFragment()).toMatchSnapshot();
});