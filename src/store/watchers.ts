import { Saga, SagaMiddleware } from 'redux-saga';

// store
import { watchAppInitializer } from './appInitializer/watch';

const watches: Array<Saga<any>> = [
  watchAppInitializer,
];

const sagaMiddlewareRuns = (sagaMiddleware: SagaMiddleware): void => {
  for (const watch of watches) {
    sagaMiddleware.run(watch);
  }
};

export default sagaMiddlewareRuns;
