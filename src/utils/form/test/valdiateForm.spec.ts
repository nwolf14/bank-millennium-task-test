// others
import { TField } from '../../../store/reduxHookForm/types';
import { TObject } from '../../../types';

// utils
import { validateForm } from '../formStates';

const testCases = [
  {
    args: {
      fields: {
        email: { asyncErrors: [], syncErrors: [] },
        password: { asyncErrors: [], syncErrors: [] },
      },
    },
    description: 'Should be valid',
    expectedResult: true,
  },
  {
    args: {
      fields: {
        email: { asyncErrors: ['Error'], syncErrors: [] },
        password: { asyncErrors: [], syncErrors: [] },
      },
    },
    description: 'Should be invalid',
    expectedResult: false,
  },
  {
    args: {
      fields: {
        email: { asyncErrors: [], syncErrors: ['Error'] },
      },
    },
    description: 'Should be invalid',
    expectedResult: false,
  },
  {
    args: {
      fields: {
        email: { asyncErrors: ['Error'], syncErrors: ['Error'] },
      },
    },
    description: 'Should be invalid',
    expectedResult: false,
  },
];

describe('validateForm', () => {
  testCases.forEach(({ args, description, expectedResult }) => {
    it(description, () => {
      const { fields } = args;
      const result = validateForm(fields as unknown as TObject<TField>);

      expect(result).toBe(expectedResult);
    });
  });
});
