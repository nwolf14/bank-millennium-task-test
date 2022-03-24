// core
import { RouteName } from '../../constants/routes';

// utils
import { getRouteByName } from '../getRouteByName';

describe('getRouteByName', () => {
  it('should return correct route', () => {
    const result = getRouteByName(RouteName.Dashboard);

    expect(result).toBe('/');
  });
});
