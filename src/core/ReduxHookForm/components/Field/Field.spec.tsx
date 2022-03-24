import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';

// components
import Checkbox from '../../../../shared/ComponentsUI/components/Checkbox/Checkbox';
import Field from './Field';
import TextField from '../../../../shared/ComponentsUI/components/TextField/TextField';

// others
import { InputValueType } from './enums';

const stateMock = {
  reduxHookForm: {
    testForm: {
      asyncTimeDelay: 0,
      error: '',
      fields: {
        testField: {
          active: false,
          asyncErrors: [],
          initialValue: '',
          isPending: false,
          parse: (value: any) => value,
          syncErrors: [],
          touched: false,
          touchedAfterClick: false,
          value: '',
          visited: false,
        },
      },
      isPending: false,
      isValid: false,
    },
  },
};

jest.mock('lodash', () => ({
  ...(jest.requireActual('lodash') as Object),
  defer: (callback: any) => callback(),
}));

describe('Field as Component', () => {
  const mockStore = configureStore();

  it('matches snapshot', () => {
    const { asFragment } = render(
      <Provider store={mockStore(stateMock)}>
        <Field Component={TextField} formName="testForm" name="testField" />
      </Provider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});

describe('Field as children', () => {
  const mockStore = configureStore();

  it('matches snapshot', () => {
    const { asFragment } = render(
      <Provider store={mockStore(stateMock)}>
        <Field formName="unknown" name="unknown">
          {() => <TextField />}
        </Field>
      </Provider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});

describe('Field as number type', () => {
  const mockStore = configureStore();

  it('matches snapshot', () => {
    const { asFragment } = render(
      <Provider store={mockStore(stateMock)}>
        <Field
          Component={TextField}
          formName="testForm"
          inputValueType={InputValueType.number}
          name="testField"
          type="number"
        />
      </Provider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});

describe('Field as boolean type', () => {
  const mockStore = configureStore();

  it('matches snapshot', () => {
    const { asFragment } = render(
      <Provider store={mockStore(stateMock)}>
        <Field
          Component={Checkbox}
          formName="testForm"
          inputValueType={InputValueType.boolean}
          name="testField"
          type="number"
        />
      </Provider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});

describe('Field as null', () => {
  const mockStore = configureStore();

  it('matches snapshot', () => {
    const { asFragment } = render(
      <Provider store={mockStore(stateMock)}>
        <Field formName="unknown" name="unknown" />
      </Provider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
