import Login from '../components/Login/Login';
import Dashboard from '../components/Dashboard/Dashborad';

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
    id: 'login',
    path: '/',
    exact: true,
    component: Login,
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
