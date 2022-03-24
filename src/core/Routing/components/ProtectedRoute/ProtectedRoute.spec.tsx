import configureStore from 'redux-mock-store';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';

// components
import ProtectedRoute from './ProtectedRoute';

// utils
import { history } from '../../../../utils/history';
import { RouteName } from '../../constants/routes';
import { TAppRouteData, TGuard } from '../../types';
import { Redirect } from 'react-router';

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
  Component: () => <div>Component</div>,
  name: '/' as RouteName,
  guards: [
    {
      guardCheck: () => true,
      renderFallback: () => (
        <Redirect
          exact
          // @ts-ignore
          from={'/'}
          // @ts-ignore
          to={'/error'}
        />
      ),
    },
  ] as unknown as Array<TGuard>,
};

describe('ProtectedRoute', () => {
  const mockStore = configureStore();

  it('matches snapshot', () => {
    const { Component, guards, name } = routeData;

    const { asFragment } = render(
      <Provider store={mockStore(stateMock)}>
        <ConnectedRouter history={history}>
          <ProtectedRoute guards={guards} name={name}>
            {Component}
          </ProtectedRoute>
        </ConnectedRouter>
      </Provider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});

describe('ProtectedRoute', () => {
  const mockStore = configureStore();

  it('matches snapshot', () => {
    const { Component, guards, name } = routeData;

    const { asFragment } = render(
      <Provider store={mockStore(stateMock)}>
        <ConnectedRouter history={history}>
          <ProtectedRoute
            guards={[{ ...guards![0], guardCheck: () => false }]}
            name={name}
          >
            {Component}
          </ProtectedRoute>
        </ConnectedRouter>
      </Provider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
