import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { deleteFoodCalorie } from '../actions';
import { AppState } from '../models/AppState';

const mapDispatchToProps = (dispatch: ThunkDispatch<AppState, undefined, any>, ownProps: { id: string }) => ({
    onClick: () => dispatch(deleteFoodCalorie(ownProps.id)),
})

export default connect(
    null,
    mapDispatchToProps
)(FontAwesomeIcon)