import composeFp from 'lodash/fp/compose';
import getFp from 'lodash/fp/get';
import getOrFp from 'lodash/fp/getOr';
import isArrayFp from 'lodash/fp/isArray';
import pickFp from 'lodash/fp/pick';
import { createSelector, Selector } from 'reselect';

// others
import { TField, TForm, TReduxHookFormState } from './types';
import { TObject } from './../../types';
import { TMainState } from '../../types';

// store
import { REDUCER_KEY } from './actionsType';

export const reduxHookFormSelector: Selector<TMainState, TReduxHookFormState> =
  getFp(REDUCER_KEY);

export const getFormSelectorCreator = (
  formName: string
): Selector<TMainState, TForm> =>
  createSelector(reduxHookFormSelector, getOrFp({} as TForm, `${formName}`));

export const getFormAttributesSelectorCreator = (
  attributes: string | Array<string>,
  formName: string
): Selector<TMainState, Partial<TForm>> | any =>
  createSelector(
    getFormSelectorCreator(formName),
    isArrayFp(attributes) ? pickFp(attributes) : getFp(attributes)
  );

export const getFieldsSelectorCreator = (
  formName: string,
  fieldsNames?: Array<string>
): Selector<TMainState, TObject<TField> | undefined> =>
  createSelector(
    getFormSelectorCreator(formName),
    fieldsNames
      ? composeFp(pickFp(fieldsNames), getFp('fields'))
      : getFp(`fields`)
  );

export const getFieldSelectorCreator = (
  formName: string,
  name: string
): Selector<TMainState, TField> =>
  createSelector(
    getFieldsSelectorCreator(formName),
    getOrFp({} as TField, name)
  );

export const getFieldAttributesSelectorCreator = (
  attributes: string | Array<string>,
  formName: string,
  name: string
): Selector<TMainState, Partial<TField>> | any =>
  createSelector(
    getFieldSelectorCreator(formName, name),
    isArrayFp(attributes) ? pickFp(attributes) : getFp(attributes)
  );
