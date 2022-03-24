import mapValues from 'lodash/mapValues';

// others
import { Size } from '../../enums';

export const className = 'TextFieldInput';

export const classNames = {
  [className]: {
    name: className,
    modificators: {
      ...mapValues(Size, (size) => `${className}--${size}`),
    },
  },
  multiline: {
    name: `${className}__multiline`,
    modificators: {
      ...mapValues(Size, (size) => `${className}__multiline--${size}`),
    },
  },
};
