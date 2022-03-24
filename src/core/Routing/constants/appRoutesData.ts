import { lazy } from 'react';

// components
const DashboardPage = lazy(
  () => import('../../../pages/DashboardPage/DashboardPage')
);

// core
import { RouteName } from './routes';

// others
import { TAppRoutesData } from '../types';

export const APP_ROUTES_DATA: TAppRoutesData = [
  {
    Component: DashboardPage,
    name: RouteName.Dashboard,
  }
];
