// others
import { fieldMock, formMock } from './mocks';

/**
 *
 * @Selectors
 */
export const getFormSelectorCreatorTestCases = () => [
  {
    args: {
      mockStore: {},
    },
    description: 'should not find any form',
    expectedResult: {},
  },
  {
    args: {
      mockStore: {
        testForm: formMock,
      },
    },
    description: 'should return form',
    expectedResult: formMock,
  },
];

export const getFormAttributesSelectorCreatorTestCases = () => [
  {
    args: {
      attributes: 'unknown',
      testForm: formMock,
    },
    description: 'should not return attribute',
    expectedResult: undefined,
  },
  {
    args: {
      attributes: [],
      testForm: formMock,
    },
    description: 'should not return attribute',
    expectedResult: {},
  },
  {
    args: {
      attributes: 'isPending',
      testForm: formMock,
    },
    description: 'should return single attribute',
    expectedResult: false,
  },
  {
    args: {
      attributes: ['isPending', 'asyncTimeDelay'],
      testForm: formMock,
    },
    description: 'should return set of attributes',
    expectedResult: { asyncTimeDelay: 0, isPending: false },
  },
];

export const getFieldsSelectorCreatorTestCases = () => [
  {
    args: {
      fieldsNames: null,
      testForm: {
        ...formMock,
        fields: {
          testField1: fieldMock,
          testField2: fieldMock,
        },
      },
    },
    description: 'should return all fields',
    expectedResult: {
      testField1: fieldMock,
      testField2: fieldMock,
    },
  },
  {
    args: {
      fieldsNames: ['testField1'],
      testForm: {
        ...formMock,
        fields: {
          testField1: fieldMock,
          testField2: fieldMock,
        },
      },
    },
    description: 'should return one field',
    expectedResult: {
      testField1: fieldMock,
    },
  },
];

export const getFieldSelectorCreatorTestCases = () => [
  {
    args: {
      name: '',
      form: {
        ...formMock,
        fields: {
          testField: fieldMock,
        },
      },
    },
    description: 'should not return field',
    expectedResult: {},
  },
  {
    args: {
      name: 'testField',
      form: {
        ...formMock,
        fields: {
          testField: fieldMock,
        },
      },
    },
    description: 'should return field',
    expectedResult: {},
  },
];

export const getFieldAttributesSelectorCreatorTestCases = () => [
  {
    args: {
      attributes: '',
      field: fieldMock,
    },
    description: 'should not return attribute',
    expectedResult: undefined,
  },
  {
    args: {
      attributes: [],

      field: fieldMock,
    },
    description: 'should not return attribute',
    expectedResult: {},
  },
  {
    args: {
      attributes: 'value',

      field: fieldMock,
    },
    description: 'should return attribute',
    expectedResult: '',
  },
  {
    args: {
      attributes: ['isPending', 'value'],

      field: fieldMock,
    },
    description: 'should return attributes',
    expectedResult: { isPending: false, value: '' },
  },
];
