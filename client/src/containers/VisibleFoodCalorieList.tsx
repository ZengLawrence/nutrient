import { connect } from 'react-redux';
import { FoodList } from '../components/FoodList';
import { AppState } from '../models/AppState';

const mapStateToProps = (state: AppState) => ({
    foodCalories: state.foodCalories,
})

const mapDispatchToProps = () => ({
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FoodList)