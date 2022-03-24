import { ReactElement } from 'react';

// utils
import { getInitialValue } from '../utils';

jest.mock('../../../../../utils/react-children/findReactElement', () => ({
  findReactElement: (children: ReactElement) => children,
}));

describe('getInitialValue', () => {
  it('Should return false when checkbox is not checked', () => {
    const children = { props: { defaultValue: false } };

    expect(getInitialValue(children as ReactElement, null)).toEqual([false]);
  });

  it('Should return true when checkbox is checked', () => {
    const children = { props: { defaultValue: true } };

    expect(getInitialValue(children as ReactElement, null)).toEqual([true]);
  });

  it('Should return array of false when checkboxes are checked but controlledChecked is false', () => {
    const children = [{ props: { value: true } }, { props: { value: true } }];

    expect(
      getInitialValue(children as Array<ReactElement>, [false, false])
    ).toEqual([false, false]);
  });

  it('Should return array of true when checkboxes are not checked but controlledChecked is true', () => {
    const children = [{ props: { value: false } }, { props: { value: false } }];

    expect(
      getInitialValue(children as Array<ReactElement>, [true, true])
    ).toEqual([true, true]);
  });
});
