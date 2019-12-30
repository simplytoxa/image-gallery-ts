import Dashboard from '../components/Dashboard/Dashborad';
import AuthForm from '../containers/AuthForm/AuthForm.container';

interface RouteType {
  id: string;
  path: string | string[];
  exact?: boolean;
  component: any;
  subNavComponent?: any;
  accessRule?: string[];
  isPublic?: boolean;
}

export const routes: RouteType[] = [
  {
    id: 'auth',
    path: '/',
    exact: true,
    component: AuthForm,
    isPublic: true,
  },
  {
    id: 'dashboard',
    path: '/dashboard',
    exact: true,
    component: Dashboard,
    isPublic: false,
  },
];
