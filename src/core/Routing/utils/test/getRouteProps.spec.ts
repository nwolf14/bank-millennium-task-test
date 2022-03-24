// core
import { RouteName } from '../../constants/routes';
import { TAppRouteData, TComponent } from '../../types';

// utils
import { getRouteProps } from '../getRouteProps';

const routeData: TAppRouteData = {
  Component: null as unknown as TComponent,
  name: RouteName.Dashboard,
};

describe('getRouteProps', () => {
  it('should return correct route props', () => {
    const result = getRouteProps(routeData);

    expect(result).toStrictEqual({
      component: null,
      exact: true,
      guards: [],
      name: 'dashboard',
      path: '/',
    });
  });
});
