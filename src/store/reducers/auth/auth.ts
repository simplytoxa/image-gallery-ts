import { Reducer, Action } from 'redux';
import ActionTypes from '../../actions/ActionTypes';

interface State {
  email: string;
  password: string;
}

const initialState: State = {
  email: '',
  password: '',
};

const doAuthSuccess = (state, { email, password }) => ({
  ...state,
  email,
  password,
});

const doAuthFail = (state, { errors }) => ({
  ...state,
  errors,
});

const reducer: Reducer<State> = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.DO_AUTH_SUCCESS:
      return doAuthSuccess(state, action);
    case ActionTypes.DO_AUTH_FAIL:
      return doAuthFail(state, action);
    default:
      return state;
  }
};

export default reducer;
