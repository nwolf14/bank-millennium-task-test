import { mapValues } from 'lodash';

import { Size } from '../../enums';

export const className = 'SwitchHandler';

export const classNames = {
  [className]: {
    name: className,
    modificators: {
      checked: `${className}--checked`,
      disabled: `${className}--disabled`,
      ...mapValues(Size, (size) => `${className}--${size}`),
    },
  },
};
