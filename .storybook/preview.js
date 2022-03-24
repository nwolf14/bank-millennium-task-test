import React from 'react';
import { Provider } from 'react-redux';

// store
import configureStore from '../src/store/configureStore';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <Provider store={configureStore()}>
      <Story />
    </Provider>
  ),
];
