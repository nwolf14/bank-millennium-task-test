// others
import { TField, TReduxHookFormState } from '../types';

// utils
import { getUpdatedFieldsState } from '../utils';

describe('getUpdatedFieldsState', () => {
  it('should return updated field', () => {
    const stateMock = {
      testForm: {
        fields: {
          testField: {},
        },
      },
    } as unknown as TReduxHookFormState;

    expect(
      getUpdatedFieldsState(
        { value: '' } as Partial<TField>,
        'testForm',
        'testField',
        stateMock
      )
    ).toStrictEqual({
      testField: {
        value: '',
      },
    });
  });
});
