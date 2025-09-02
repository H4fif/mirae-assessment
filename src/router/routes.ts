import App from '@/App';
import DashboardPage from '@/app/dashboard';
import LoginPage from '@/app/login';
import { createBrowserRouter } from 'react-router';

export default createBrowserRouter([
  {
    path: '/',
    Component: App,
  },
  {
    path: '/dashboard',
    Component: DashboardPage,
  },
  {
    path: '/login',
    Component: LoginPage,
  },
]);
