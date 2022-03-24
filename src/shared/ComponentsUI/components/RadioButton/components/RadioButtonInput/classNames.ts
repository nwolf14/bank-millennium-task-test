import mapValues from 'lodash/mapValues';

// others
import { Size } from '../../enums';

export const className = 'RadioButtonInput';

export const classNames = {
  [className]: {
    name: className,
    mofificators: {
      ...mapValues(Size, (size) => `${className}--${size}`),
    },
  },
};
