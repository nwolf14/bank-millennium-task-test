import { act } from 'react-test-renderer';
import { MouseEvent } from 'react';
import { renderHook } from '@testing-library/react-hooks';

// hooks
import { useRippleEffect } from './useRippleEffect';

describe('useRippleEffect', () => {
  beforeEach(() => {
    // eslint-disable-next-line
    console.error = () => {};
  });

  it('should return empty state', () => {
    const { result } = renderHook(() => useRippleEffect('test'));

    expect(result.current.rippleEffect).toBe(null);
  });

  it('should trigger effect', () => {
    const { result } = renderHook(() => useRippleEffect('test'));

    act(() => {
      result.current.triggerRippleEffect({
        currentTarget: { getBoundingClientRect: () => ({ left: 0, top: 0 }) },
      } as MouseEvent<HTMLElement>);
    });

    expect(result.current.rippleEffect).not.toBe(null);
  });

  it('should finish ripple effect after 300ms', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useRippleEffect('test')
    );

    act(() => {
      result.current.triggerRippleEffect({
        currentTarget: { getBoundingClientRect: () => ({ left: 0, top: 0 }) },
      } as MouseEvent<HTMLElement>);
    });

    await waitForNextUpdate({ timeout: 300 });
    expect(result.current.rippleEffect).toBe(null);
  });
});
