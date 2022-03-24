import mapValues from 'lodash/mapValues';

// others
import { Size } from '../../enums';

export const className = 'TextFieldLabel';

export const classNames = {
  [className]: {
    name: className,
    modificators: {
      error: `${className}--error`,
      errorFocus: `${className}--error-focus`,
      disabled: `${className}--disabled`,
      disabledWithValue: `${className}--disabled--with-value`,
      focus: `${className}--focus`,
      placementTop: `${className}--placement-top`,
      ...mapValues(Size, (size) => `${className}--${size}`),
    },
  },
};
