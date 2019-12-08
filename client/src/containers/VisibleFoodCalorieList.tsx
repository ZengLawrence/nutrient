import { connect } from 'react-redux';
import { FoodCalorieList } from '../components/FoodCalorieList';
import { AppState } from '../models/AppState';

const mapStateToProps = (state: AppState) => ({
    foodCalories: state.foodCalories,
})

const mapDispatchToProps = () => ({
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FoodCalorieList)