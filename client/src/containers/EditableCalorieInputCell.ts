import { ChangeEvent } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { CalorieInputCell } from '../components/CalorieInputCell';

const mapStateToProps = () => ({
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    handleChange: (event: ChangeEvent<HTMLInputElement>) => {

    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CalorieInputCell)