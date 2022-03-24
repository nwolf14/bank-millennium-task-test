import { ReactElement } from 'react';

// utils
import { getInitialValue } from '../utils';

jest.mock('../../../../../utils/react-children/findReactElement', () => ({
  findReactElement: (children: ReactElement) => children,
}));

describe('getInitialValue', () => {
  it('Should return empty string', () => {
    expect(getInitialValue(false, null)).toEqual('');
  });

  it('Should return empty array', () => {
    expect(getInitialValue(true, null)).toEqual([]);
  });

  it('Should return defualt value as string', () => {
    expect(getInitialValue(false, 'value')).toEqual('value');
  });

  it('Should return defualt value as string', () => {
    const data = ['1', '2'];

    expect(getInitialValue(true, data)).toEqual(data);
  });
});
