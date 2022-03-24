import { MouseEvent, useEffect, useState } from 'react';

type THookType = {
  rippleEffect: JSX.Element | null;
  triggerRippleEffect: (event: MouseEvent<HTMLElement>) => void;
};

export const useRippleEffect = (className: string): THookType => {
  const [coords, setCoords] = useState({ x: -1, y: -1 });
  const [isRippling, setIsRippling] = useState(false);
  const rippleEffect = isRippling ? (
    <span
      className={`${className}--ripple`}
      style={{
        left: coords.x,
        top: coords.y,
      }}
    />
  ) : null;

  const triggerRippleEffect = (event: MouseEvent<HTMLElement>): void => {
    const { clientX, clientY, currentTarget } = event;
    const { left, top } = currentTarget.getBoundingClientRect();

    setCoords({
      x: clientX - left,
      y: clientY - top,
    });
  };

  useEffect(() => {
    if (coords.x !== -1 && coords.y !== -1) {
      setIsRippling(true);
      setTimeout(() => setIsRippling(false), 300);
    }
  }, [coords]);

  return { rippleEffect, triggerRippleEffect };
};
