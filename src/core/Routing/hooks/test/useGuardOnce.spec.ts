import { renderHook } from '@testing-library/react-hooks';

// hooks
import { useGuardOnce } from '../useGuardOnce';

describe('useGuardOnce', () => {
  it('should return true when guard is watching', () => {
    const { result } = renderHook(() =>
      useGuardOnce(() => ({ condition: false, done: false }))
    );

    expect(result.current).toEqual(true);
  });

  it('should return result when guard is not watching', async () => {
    const { result } = renderHook(() =>
      useGuardOnce(() => ({ condition: false, done: true }))
    );

    expect(result.current).toEqual(false);
  });
});
