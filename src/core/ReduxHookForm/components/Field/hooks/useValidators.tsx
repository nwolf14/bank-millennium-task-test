import { debounce, DebouncedFunc } from 'lodash';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// others
import {
  SET_PENDING_FIELD,
  UPDATE_ASYNC_ERRORS,
  UPDATE_SYNC_ERRORS,
} from '../../../../../store/reduxHookForm/actionsType';
import { TAsyncValidator, TSyncValidator } from '../../../types';
import { TField } from '../../../../../store/reduxHookForm/types';
import { TMainState } from '../../../../../types';

// store
import {
  getFieldsSelectorCreator,
  getFormAttributesSelectorCreator,
} from '../../../../../store/reduxHookForm/selectors';

// utils
import { dispatchFieldHandler } from '../../../utils/dispatchFieldHandler';
import {
  getErrorsFromAsyncValidators,
  getErrorsFromSyncValidators,
} from '../../../utils/validators';

export type THookType = {
  getAsyncErrors: (
    value: boolean | number | string | Array<string>
  ) => Promise<Array<string>>;
  getSyncErrors: (
    value: boolean | number | string | Array<string>
  ) => Array<string>;
  updateAsyncValidators: DebouncedFunc<
    (value: boolean | number | string | Array<string>) => Promise<void>
  >;
  updateSyncValidators: (
    value: boolean | number | string | Array<string>
  ) => void;
};

export const useValidators = (
  asyncValidators: Array<TAsyncValidator>,
  formName: string,
  name: string,
  subscriptionFields: Array<string>,
  syncValidators: Array<TSyncValidator>
): THookType => {
  const dispatchField = dispatchFieldHandler(useDispatch(), formName, name);
  const asyncTimeDelay = (useSelector(
    getFormAttributesSelectorCreator('asyncTimeDelay', formName)
  ) || 0) as number;

  const fields: { [key: string]: TField } | {} | undefined = useSelector(
    (state: TMainState) => {
      if (subscriptionFields.length) {
        return getFieldsSelectorCreator(formName, subscriptionFields)(state);
      }

      return {};
    }
  );

  const getAsyncErrors = async (
    value: boolean | number | string | Array<string>
  ): Promise<Array<string>> => {
    dispatchField({ isPending: true }, SET_PENDING_FIELD);

    return await getErrorsFromAsyncValidators(asyncValidators, value, fields);
  };

  const getSyncErrors = (
    value: boolean | number | string | Array<string>
  ): Array<string> =>
    getErrorsFromSyncValidators(syncValidators, value, fields);

  const updateAsyncValidators = useCallback(
    debounce(async (value: boolean | number | string | Array<string>) => {
      if (asyncValidators.length) {
        const asyncErrors = await getAsyncErrors(value);

        dispatchField({ asyncErrors, isPending: false }, UPDATE_ASYNC_ERRORS);
      }
    }, asyncTimeDelay),
    []
  );

  const updateSyncValidators = (
    value: boolean | number | string | Array<string>
  ): void => {
    if (syncValidators.length) {
      dispatchField({ syncErrors: getSyncErrors(value) }, UPDATE_SYNC_ERRORS);
    }
  };

  return {
    getAsyncErrors,
    getSyncErrors,
    updateAsyncValidators,
    updateSyncValidators,
  };
};
