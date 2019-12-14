import React from 'react';
import { Card, CardBody, CardTitle, Col, Container, Row } from 'reactstrap';
import AddFoodCalorie from '../containers/AddFoodCalorie';
import VisibleFoodCalorieList from '../containers/ViewableFoodCalorieList';

export const Home = () => {

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col className="col-md-6">
          <Card className="shadow-sm p-3 mt-3 mb-5 rounded">
            <CardBody className="card-body">

              <CardTitle><h4 className="text-center">Food Calories</h4></CardTitle>

              <AddFoodCalorie />
              <VisibleFoodCalorieList />

            </CardBody>
          </Card>

        </Col>

      </Row>
    </Container>
  );
};
