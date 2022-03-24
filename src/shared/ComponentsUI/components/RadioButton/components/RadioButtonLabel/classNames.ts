import mapValues from 'lodash/mapValues';

// others
import { Size } from '../../enums';

export const className = 'RadioButtonLabel';

export const classNames = {
  [className]: {
    name: className,
    modificators: {
      disabled: `${className}--disabled`,
      ...mapValues(Size, (size) => `${className}--${size}`),
    },
  },
};
