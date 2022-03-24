import classnames from 'classnames';
import { FC, useEffect, useRef } from 'react';

// others
import { className as classNameCirclePulse, classNames } from './classNames';

// styles
import './circle-pulse.scss';

type TProps = {
  animationDuration: number;
  className: string;
  pulseElements: Array<string>;
  setPulseElements: (pulseElements: Array<string>) => void;
};

const CirclePulse: FC<TProps> = ({
  animationDuration,
  className,
  pulseElements,
  setPulseElements,
}) => {
  const startedRef = useRef(new Date().getTime());

  useEffect(() => {
    const remainingTime =
      animationDuration - (new Date().getTime() - startedRef.current);
    const timer = setTimeout(() => {
      setPulseElements(pulseElements.slice(1));
    }, remainingTime);

    return () => {
      clearTimeout(timer);
    };
  }, [pulseElements]);

  return (
    <span
      className={classnames(classNames[classNameCirclePulse], className)}
      style={{ animationDuration: `${animationDuration}ms` }}
    />
  );
};

export default CirclePulse;
