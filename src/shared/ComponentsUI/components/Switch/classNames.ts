import { mapValues } from 'lodash';

// others
import { Margin } from '../../enums';
import { Size } from './enums';

export const className = 'Switch';

export const classNames = {
  [className]: {
    name: className,
    modificators: {
      ...mapValues(Margin, (margin) => `${className}--${margin}`),
    },
  },
  wrapper: `${className}__wrapper`,
  inputWrapper: {
    name: `${className}__input-wrapper`,
    modificators: {
      checked: `${className}__input-wrapper--checked`,
      disabled: `${className}__input-wrapper--disabled`,
      error: `${className}__input-wrapper--error`,
      ...mapValues(Size, (size) => `${className}__input-wrapper--${size}`),
    },
  },
};
