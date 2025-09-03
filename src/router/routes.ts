import { createBrowserRouter } from 'react-router';
import { ROUTE } from '@/constants';
import { lazy } from 'react';

const DashboardPage = lazy(() => import('@/app/dashboard'));
const LoginPage = lazy(() => import('@/app/login'));

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
