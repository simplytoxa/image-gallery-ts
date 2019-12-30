import ActionTypes from '../ActionTypes';

export const doLogout = () => ({
  type: ActionTypes.DO_LOGOUT,
  ready: false,
});

export const doAuthInit = ({ email, password }) => ({
  type: ActionTypes.DO_AUTH_INIT,
  email,
  password,
});

export const doAuthStart = () => ({
  type: ActionTypes.DO_AUTH_START,
});

export const doAuthSuccess = ({ email, password }) => ({
  type: ActionTypes.DO_AUTH_SUCCESS,
  email,
  password,
});

export const doAuthFail = errors => ({
  type: ActionTypes.DO_AUTH_FAIL,
  errors,
});
