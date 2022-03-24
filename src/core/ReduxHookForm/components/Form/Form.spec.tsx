import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { fireEvent, render } from '@testing-library/react';

// components
import Form from './Form';
import Field from '../Field/Field';
import TextField from '../../../../shared/ComponentsUI/components/TextField/TextField';
import Button from '../../../../shared/ComponentsUI/components/Button/Button';

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

describe('Form', () => {
  const mockStore = configureStore();

  it('matches snapshot', () => {
    const { asFragment, getByText } = render(
      <Provider store={mockStore(stateMock)}>
        <Form onSubmit={() => {}} formName="testForm">
          <Field Component={TextField} name="testField" />
          <Button type="submit">Click</Button>
        </Form>
      </Provider>
    );
    fireEvent.click(getByText('Click'));

    expect(asFragment()).toMatchSnapshot();
  });
});
