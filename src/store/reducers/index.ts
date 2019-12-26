import { History } from 'history';
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import gallery from './gallery';

const createRootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    gallery,
  });

export default createRootReducer;
