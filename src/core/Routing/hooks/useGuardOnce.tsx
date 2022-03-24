import { useState } from 'react';

type THookType = boolean;

export const useGuardOnce = (
  callback: () => { condition: boolean; done: boolean }
): THookType => {
  const [isWatching, setIsWatching] = useState(true);
  const { condition, done } = callback();

  if (done && isWatching) {
    setIsWatching(false);
  }

  return isWatching ? true : condition;
};
