import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { foodCalorieDeleted } from '../actions';

const mapDispatchToProps = (dispatch : Dispatch, ownProps: {id: string}) => ({
    onClick: () => dispatch(foodCalorieDeleted(ownProps.id)),
})

export default connect(
    null,
    mapDispatchToProps
)(FontAwesomeIcon)