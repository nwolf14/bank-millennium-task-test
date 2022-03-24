import configureStore from 'redux-mock-store';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';

// components
import DashboardPage from '../../../../pages/DashboardPage/DashboardPage';

// core
import { renderRoute } from '../renderRoute';

// others
import { RouteName } from '../../constants/routes';
import { TAppRouteData } from '../../types';

// utils
import { history } from '../../../../utils/history';

const stateMock = {
  router: {
    location: {
      pathname: '/',
      search: '',
      hash: '',
      query: {},
    },
    action: 'POP',
  },
};

const routeData: TAppRouteData = {
  Component: DashboardPage,
  name: RouteName.Dashboard,
};

describe('renderRoute', () => {
  const mockStore = configureStore();

  it('matches snapshot', () => {
    const { asFragment } = render(
      <Provider store={mockStore(stateMock)}>
        <ConnectedRouter history={history}>
          {renderRoute(routeData)}
        </ConnectedRouter>
      </Provider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
