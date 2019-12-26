import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import createRootReducer from '../store/reducers';
import { rootSaga } from '../store/sagas';
import config from './configApp';

export const history = createBrowserHistory({
  basename: config.BASENAME,
});

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();
const rootReducer = createRootReducer(history);

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware, routerMiddleware(history)))
);

sagaMiddleware.run(rootSaga);

export default store;
