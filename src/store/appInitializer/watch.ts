import { all, AllEffect, ForkEffect, takeEvery } from 'redux-saga/effects';

// store
import { APP_INIT } from './actionsType';
import { appInitSaga } from './saga';

export function* watchAppInitializer(): Generator<AllEffect<ForkEffect<any>>> {
  yield all([takeEvery([APP_INIT], appInitSaga)]);
}
