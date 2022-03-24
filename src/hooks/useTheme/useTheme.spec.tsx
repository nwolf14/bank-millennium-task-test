import { renderHook } from '@testing-library/react-hooks';

// hooks
import { useTheme } from './useTheme';

jest.mock('../../utils/userPreferences', () => ({
  getThemePreferences: () => 'dark',
}));

const classNames = {
  className: 'className',
  nestedClassName: {
    name: 'nestedClassName',
    modificators: { nestedClassName: 'nestedClassName--modificator' },
  },
};
const expectedResult = {
  className: 'className className--dark',
  nestedClassName: {
    name: 'nestedClassName nestedClassName--dark',
    modificators: {
      nestedClassName:
        'nestedClassName--modificator nestedClassName--modificator--dark',
    },
  },
};

describe('useTheme', () => {
  it(`should append dark theme for every classNames`, () => {
    const { result } = renderHook(() => useTheme(classNames));

    expect(result.current.classNamesWithTheme).toEqual(expectedResult);
  });
});
