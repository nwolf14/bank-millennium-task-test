import configureStore from 'redux-mock-store';
import { FC } from 'react';
import { Provider } from 'react-redux';

export const getProviderWrapper = (mockState: object): FC => {
  const mockStore = configureStore();
  const store = mockStore(mockState);

  return ({ children }) => <Provider store={store}>{children}</Provider>;
};
