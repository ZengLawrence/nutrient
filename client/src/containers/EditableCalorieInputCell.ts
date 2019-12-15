import { ChangeEvent } from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { editFoodCalorieChange, editFoodCalorieEnd, editFoodCalorieStart, saveEditFoodCalorieChange } from '../actions';
import { CalorieInputCell } from '../components/CalorieInputCell';
import { AppState } from '../models/AppState';

const calorieValue = (state: AppState, ownProps : {id: string, value: number}) => {
    const foodCalorie = state.editFoodCalorie.foodCalorie;
    if (foodCalorie && foodCalorie.id === ownProps.id) {
        return foodCalorie.caloriesPer100g;
    } else {
        return ownProps.value;
    }
}

const mapStateToProps = (state : AppState, ownProps : {id: string, value: number}) => ({
    value: calorieValue(state, ownProps),
});
    
const mapDispatchToProps = (dispatch: ThunkDispatch<AppState, undefined, any>, ownProps: {id: string, value: number}) => ({
    handleFocus: () => {
        const partial = { 
            id: ownProps.id, 
            caloriesPer100g: ownProps.value 
        };
        dispatch(editFoodCalorieStart(partial));
    },
    handleChange: (event: ChangeEvent<HTMLInputElement>) => {
        const caloriesPer100g = parseInt(event.currentTarget.value);
        dispatch(editFoodCalorieChange({ caloriesPer100g }));
    },
    handleBlur: () => {
        dispatch(saveEditFoodCalorieChange());
        dispatch(editFoodCalorieEnd());
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CalorieInputCell)