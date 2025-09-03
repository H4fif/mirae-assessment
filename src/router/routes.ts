import { createBrowserRouter } from 'react-router';
import App from '@/App';
import DashboardPage from '@/app/dashboard';
import LoginPage from '@/app/login';
import { ROUTE } from '@/constants';

export default createBrowserRouter([
  {
    path: '/',
    Component: App,
  },
  {
    path: ROUTE.DASHBOARD,
    Component: DashboardPage,
  },
  {
    path: ROUTE.LOGIN,
    Component: LoginPage,
  },
]);
