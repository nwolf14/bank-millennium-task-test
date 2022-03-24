import { useLayoutEffect, useState } from 'react';

type THookType = {
  innerHeight: number;
  innerWidth: number;
};

export const useWindowSize = (): THookType => {
  const [size, setSize] = useState({ innerHeight: 0, innerWidth: 0 });

  const updateSize = (): void => {
    const { innerHeight, innerWidth } = window;
    setSize({ innerHeight, innerWidth });
  };

  useLayoutEffect(() => {
    window.addEventListener('resize', updateSize);
    updateSize();

    return () => {
      window.removeEventListener('resize', updateSize);
    };
  }, []);

  return size;
};
