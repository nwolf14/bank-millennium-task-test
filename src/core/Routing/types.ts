import {
  ComponentClass,
  ComponentType,
  FunctionComponent,
  LazyExoticComponent,
  ReactElement,
} from 'react';
import { RouteProps } from 'react-router';

// others
import { RouteName } from './constants/routes';
import { TMainState } from '../../types';

export type TProtectedRouteProps = {
  guards?: Array<TGuard>;
  name: RouteName;
} & RouteProps;

export type TGuard = {
  guardCheck: (state: TMainState, routeProps?: RouteProps) => boolean;
  renderFallback: (
    routeProps: TProtectedRouteProps
  ) => JSX.Element | ReactElement;
};

export type TComponent =
  | ComponentType<{}>
  | LazyExoticComponent<FunctionComponent>
  | LazyExoticComponent<ComponentClass<{}, unknown>>
  | undefined;

export type TAppRouteData = {
  name: RouteName;
  path?: string;
  Component?: TComponent;
  guards?: Array<TGuard>;
};

export type TAppRoutesData = Array<TAppRouteData | TAppRouteData['name']>;
