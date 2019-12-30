import { connect } from 'react-redux';
import AuthForm from '../../components/AuthForm/AuthForm';
import { Dispatch, bindActionCreators } from 'redux';
import { doAuthInit } from '../../store/actions';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({ doAuthInit }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);
