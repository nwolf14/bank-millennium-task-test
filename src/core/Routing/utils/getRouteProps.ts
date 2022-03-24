// others
import { ROUTES } from '../constants/routes';
import { TAppRouteData, TProtectedRouteProps } from '../types';

const getRoutePath = ({ name }: TAppRouteData): TAppRouteData['path'] =>
  ROUTES[name];

export const getRouteProps = (
  routeData: TAppRouteData
): TProtectedRouteProps => ({
  path: getRoutePath(routeData),
  name: routeData.name,
  exact: true,
  component: routeData.Component,
  guards: routeData.guards || [],
});
