import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// components
import App from './components/App/App';

// core
import ContextProvider from './core/ContextProvider/ContextProvider';

// store
import configureStore from './store/configureStore';

// styles
import './index.scss';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ContextProvider>
        <App />
      </ContextProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

if (window?.Cypress) {
  window.store = store;
}
