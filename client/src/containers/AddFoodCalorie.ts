import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { addFoodCalorie } from '../actions';
import { FoodCalorieInputForm } from '../components/FoodCalorieInputForm';
import * as FoodCalorieService from '../services/FoodCalorieService';

const mapStateToProps = () => ({
})

const mapDispatchToProps = (dispatch : Dispatch) => ({
    add: (food: string, caloriesPer100g: number) => {
        FoodCalorieService.post({ food, caloriesPer100g })
            .then(foodCalorie => dispatch(addFoodCalorie(foodCalorie)));
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FoodCalorieInputForm)