import { History } from 'history';
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import gallery from './gallery';
import auth from './auth';

const createRootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    gallery,
    auth,
  });

export default createRootReducer;
