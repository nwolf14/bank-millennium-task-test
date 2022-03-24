import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';

// components
import App from './App';

const stateMock = {
  appInitializer: {
    isAppLoaded: true,
    isTranslationLoaded: true,
  },
  router: {
    location: {
      pathname: '/',
      search: '',
      hash: '',
      query: {},
    },
    action: 'POP',
  },
  strategyVisualBuilder: {
    areaCoordinates: { x: 0, y: 0 },
    blocks: [],
    connectors: [],
    draggableConnector: null,
    possibleBlockNodeTarget: null,
    selectedBlockLayerId: -1,
    selectedElement: null,
    snapToGrid: false,
    strategyResult: '',
  },
};

describe('App', () => {
  const mockStore = configureStore();

  it('matches snapshot', () => {
    const { asFragment } = render(
      <Provider store={mockStore(stateMock)}>
        <App />
      </Provider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
