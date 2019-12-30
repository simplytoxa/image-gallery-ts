import { doLogout } from './../store/actions/auth/auth';
import { createContext } from 'react';
import store from '../configs/store';

export const buildContext = () => ({
  logout: () => store.dispatch(doLogout()),
  checkPermission: () => {
    return true;
  },
});
const context = buildContext();
const AuthContext = createContext(context);

export default AuthContext;
