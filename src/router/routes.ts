import { createBrowserRouter } from 'react-router';
import DashboardPage from '@/app/dashboard';
import LoginPage from '@/app/login';
import { ROUTE } from '@/constants';

export default createBrowserRouter([
  {
    path: '/',
    Component: DashboardPage,
  },
  {
    path: ROUTE.LOGIN,
    Component: LoginPage,
  },
]);
