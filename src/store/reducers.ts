import { CombinedState, combineReducers, Reducer } from 'redux';
import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';
import { TAnyAction, TMainState } from '../types';
import appInitializer from './appInitializer/reducer';
import modal from './modal/reducer';
import reduxHookForm from './reduxHookForm/reducer';

const reducers = {
  appInitializer,
  modal,
  reduxHookForm,
};

const createRootReducer = (
  history: History
): Reducer<
  CombinedState<TMainState & { router: RouterState }>,
  TAnyAction<any>
> =>
  combineReducers({
    router: connectRouter(history),
    ...reducers,
  });

export default createRootReducer;
