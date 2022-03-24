import classnames from 'classnames';
import { FC } from 'react';

// hooks
import { useTheme } from '../../hooks/useTheme/useTheme';

// others
import { ReactComponent as ErrorIcon } from '../../assets/icons/error.svg';
import {
  className as classNameValidationMessage,
  classNames,
} from './classNames';
import { TObject } from '../../types';

// styles
import './validation-message.scss';

export type TProps = {
  className?: string;
  error?: string;
  helperText?: string;
  style?: TObject<number | string>;
};

export const ValidationMessage: FC<TProps> = ({
  className = '',
  error,
  helperText,
  style = {},
}) => {
  const { classNamesWithTheme } = useTheme(classNames);

  return (
    <div
      className={classnames(
        classNamesWithTheme[classNameValidationMessage],
        className
      )}
      style={style}
    >
      {!error && helperText && (
        <p className={classNamesWithTheme.helperText}>{helperText}</p>
      )}
      {error && (
        <div className={classNamesWithTheme.errorText}>
          <ErrorIcon className={classNamesWithTheme.errorIcon} />
          {error}
        </div>
      )}
    </div>
  );
};

export default ValidationMessage;
