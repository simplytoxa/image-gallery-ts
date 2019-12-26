import React, { Suspense } from 'react';
import { CssBaseline, CircularProgress } from '@material-ui/core';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import store, { history } from './configs/store';
import { ErrorBoundary } from './components/shared';
import AppRouter from './AppRouter';
import './App.scss';

const App = () => (
  <Suspense fallback={<CircularProgress />}>
    <CssBaseline />
    <Provider store={store}>
      <ErrorBoundary>
        <ConnectedRouter history={history}>
          <AppRouter />
        </ConnectedRouter>
      </ErrorBoundary>
    </Provider>
  </Suspense>
);

export default App;
