import { put, call } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import * as actions from '../actions';
import axios from '../../axios-instance';

export function* doAuthSaga({ email, password }): SagaIterator {
  try {
    yield put(actions.doAuthStart());
    const resp = yield call(axios.post, '/api/auth/register', { email, password });
  } catch {
    yield put(actions.doAuthFail());
  }
}
