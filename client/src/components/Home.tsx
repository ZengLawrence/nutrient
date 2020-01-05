import React from 'react';
import { Card, CardBody, CardTitle, Col, Container, Row, Spinner } from 'reactstrap';
import AddFoodCalorie from '../containers/AddFoodCalorie';
import VisibleFoodCalorieList from '../containers/ViewableFoodCalorieList';
import { AutoLoad } from './AutoLoad';
import { useDispatch } from 'react-redux';
import { getAll } from '../services/FoodCalorieService';
import { refreshFoodCalories } from '../actions';

export const Home = () => {

  const dispatch = useDispatch();

  const load = () => getAll().then(foodCalories => dispatch(refreshFoodCalories(foodCalories)));
  
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col className="col-md-6">
          <Card className="shadow-sm p-3 mt-3 mb-5 rounded">
            <CardBody className="card-body">

              <CardTitle><h4 className="text-center">Food Calories</h4></CardTitle>
              <AutoLoad load={load}>
                <Spinner />
                <AddFoodCalorie />
                <VisibleFoodCalorieList />
              </AutoLoad>

            </CardBody>
          </Card>

        </Col>

      </Row>
    </Container>
  );
};
