// others
import { TReduxHookFormState } from './../types';

// utils
import { getFieldsWithModifiedAttributes } from '../utils';

describe('getFieldsWithModifiedAttributes', () => {
  it('should return updated field', () => {
    const stateMock = {
      testForm: {
        fields: {
          testField: {
            value: '',
          },
        },
      },
    } as unknown as TReduxHookFormState;

    expect(
      getFieldsWithModifiedAttributes('testForm', stateMock)
    ).toStrictEqual({
      testField: {
        modifiedSinceLastSubmit: false,
        valueSinceLastSubmit: '',
        value: '',
      },
    });
  });
});
