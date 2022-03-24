import mapValues from 'lodash/mapValues';

// others
import { Size } from '../../enums';

export const className = 'CheckboxInput';

export const classNames = {
  [className]: {
    name: className,
    modificators: {
      ...mapValues(Size, (size) => `${className}--${size}`),
    },
  },
};
