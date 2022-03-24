// store
import { Store } from 'redux';
import { REDUCER_KEY as APP_INITIALIZER_REDUCER_KEY } from './store/appInitializer/actionsType';
import { REDUCER_KEY as MODAL_REDUCER_KEY } from './store/modal/actionsType';
import { REDUCER_KEY as REDUX_HOOK_FORM_REDUCER_KEY } from './store/reduxHookForm/actionsType';

import { TAppInitializerState } from './store/appInitializer/types';
import { TModalState } from './store/modal/types';
import { TReduxHookFormState } from './store/reduxHookForm/types';

export type TMainState = {
  [APP_INITIALIZER_REDUCER_KEY]: TAppInitializerState;
  [MODAL_REDUCER_KEY]: TModalState;
  [REDUX_HOOK_FORM_REDUCER_KEY]: TReduxHookFormState;
};

export type TAnyAction<T = any> = {
  type: string;
  payload?: T;
};

export type TObject<T> = { [key: string]: T };

declare global {
  interface Window {
    Cypress?: unknown;
    store?: Store<any, TAnyAction>;
  }
}
