import React, { useContext } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { history } from './configs/store';
import { Typography } from '@material-ui/core';
import { routes } from './configs/routes';
import AuthContext, { buildContext } from './services/Auth';

export const AppRouter = () => {
  const { checkPermission } = useContext(AuthContext);
  return (
    <Router history={history}>
      <Switch>
        {routes.map(
          (route): JSX.Element => (
            <Route
              exact={route.exact}
              key={route.id}
              path={route.path}
              render={(props): JSX.Element => (
                // TODO: Wrapper with authContextProvider
                <AuthContext.Provider value={buildContext()}>
                  {route.isPublic || checkPermission() ? (
                    <route.component {...props} />
                  ) : (
                    <Typography component="h1">404</Typography>
                  )}
                </AuthContext.Provider>
              )}
            ></Route>
          )
        )}
        <Route path="*" component={() => <Typography component="h1">404</Typography>} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
