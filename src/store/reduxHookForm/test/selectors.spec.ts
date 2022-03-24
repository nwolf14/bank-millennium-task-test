// others
import {
  getFieldAttributesSelectorCreatorTestCases,
  getFieldSelectorCreatorTestCases,
  getFieldsSelectorCreatorTestCases,
  getFormAttributesSelectorCreatorTestCases,
  getFormSelectorCreatorTestCases,
} from './testCases';

// store
import {
  getFieldAttributesSelectorCreator,
  getFieldSelectorCreator,
  getFieldsSelectorCreator,
  getFormAttributesSelectorCreator,
  getFormSelectorCreator,
} from '../selectors';

describe('getFormSelectorCreator', () => {
  const selectorFunction = (getFormSelectorCreator('testForm') as any)
    .resultFunc;
  const testCases = getFormSelectorCreatorTestCases();

  testCases.forEach(({ args, description, expectedResult }) => {
    const { mockStore } = args;

    it(description, () => {
      expect(selectorFunction(mockStore)).toEqual(expectedResult);
    });
  });
});

describe('getFormAttributesSelectorCreator', () => {
  const testCases = getFormAttributesSelectorCreatorTestCases();

  testCases.forEach(({ args, description, expectedResult }) => {
    const { attributes, testForm } = args;
    const selectorFunction = (
      getFormAttributesSelectorCreator(attributes, 'testForm') as any
    ).resultFunc;

    it(description, () => {
      expect(selectorFunction(testForm)).toEqual(expectedResult);
    });
  });
});

describe('getFieldsSelectorCreator', () => {
  const testCases = getFieldsSelectorCreatorTestCases();

  testCases.forEach(({ args, description, expectedResult }) => {
    const { fieldsNames, testForm } = args;
    const selectorFunction = (
      getFieldsSelectorCreator('testForm', fieldsNames as any) as any
    ).resultFunc;

    it(description, () => {
      expect(selectorFunction(testForm)).toEqual(expectedResult);
    });
  });
});

describe('getFieldSelectorCreator', () => {
  const testCases = getFieldSelectorCreatorTestCases();

  testCases.forEach(({ args, description, expectedResult }) => {
    const { name, form: testForm } = args;
    const selectorFunction = (getFieldSelectorCreator('testForm', name) as any)
      .resultFunc;

    it(description, () => {
      expect(selectorFunction(testForm)).toEqual(expectedResult);
    });
  });
});

describe('getFieldAttributesSelectorCreator', () => {
  const testCases = getFieldAttributesSelectorCreatorTestCases();

  testCases.forEach(({ args, description, expectedResult }) => {
    const { attributes, field } = args;
    const selectorFunction = (
      getFieldAttributesSelectorCreator(
        attributes,
        'testForm',
        'testField'
      ) as any
    ).resultFunc;

    it(description, () => {
      expect(selectorFunction(field)).toEqual(expectedResult);
    });
  });
});
