import { FC, ReactNode } from 'react';

// hooks
import { useTheme } from '../../../hooks/useTheme/useTheme';

// others
import {
  className as classNameStoryBlockWarning,
  classNames,
} from './classNames';

// styles
import './story-block-warning.scss';

export type TProps = {
  children: ReactNode;
};

const StroyBlockWarning: FC<TProps> = ({ children = null }) => {
  const { classNamesWithTheme } = useTheme(classNames);

  return (
    <blockquote className={classNamesWithTheme[classNameStoryBlockWarning]}>
      <p className={classNamesWithTheme.context}>
        <span className={classNamesWithTheme.iconWarning}>⚠️</span> {children}
      </p>
    </blockquote>
  );
};

export default StroyBlockWarning;
