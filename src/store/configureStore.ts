import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, createStore, EmptyObject, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router';

// others
import { TAnyAction, TMainState } from '../types';

// store
import reducers from './reducers';
import sagaMiddlewareRuns from './watchers';

// utils
import { history } from '../utils/history';

const sagaMiddleware = createSagaMiddleware();

const configureStore = (): Store<EmptyObject & TMainState, TAnyAction<any>> & {
  dispatch: unknown;
} => {
  const store = createStore(
    reducers(history),
    {},
    composeWithDevTools(
      applyMiddleware(routerMiddleware(history), sagaMiddleware)
    )
  );
  sagaMiddlewareRuns(sagaMiddleware);

  return store;
};

export default configureStore;
