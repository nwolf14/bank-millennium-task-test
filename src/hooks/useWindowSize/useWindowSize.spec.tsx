import { act, renderHook } from '@testing-library/react-hooks';
import { fireEvent } from '@testing-library/react';

// hooks
import { useWindowSize } from './useWindowSize';

jest.mock('../../utils/userPreferences', () => ({
  getThemePreferences: () => 'dark',
}));

const setWindowSize = (size: number) => {
  window.innerHeight = size;
  window.innerWidth = size;
};

describe('useWindowSize', () => {
  it(`should be correct innerHeight & innerWidth`, () => {
    const { result } = renderHook(() => useWindowSize());

    expect(result.current).toEqual({ innerHeight: 768, innerWidth: 1024 });
  });

  it(`should be correct innerHeight & innerWidth after resize`, () => {
    const { result } = renderHook(() => useWindowSize());

    act(() => {
      setWindowSize(500);
      fireEvent(window, new Event('resize'));
    });

    expect(result.current).toEqual({ innerHeight: 500, innerWidth: 500 });
  });
});
