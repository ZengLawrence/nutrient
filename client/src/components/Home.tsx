import React from 'react';
import AddFoodCalorie from '../containers/AddFoodCalorie';
import VisibleFoodCalorieList from '../containers/VisibleFoodCalorieList';

export const Home = () => {

  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-md-6">
          <div className="card shadow-sm p-3 mt-3 mb-5 rounded">
            <div className="card-body">

              <h4 className="card-title text-center">Food Calories</h4>
              <AddFoodCalorie />
              <VisibleFoodCalorieList />

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
