import mapValues from 'lodash/mapValues';

// others
import { Margin } from '../../enums';

export const className = 'TextField';

export const classNames = {
  [className]: {
    name: className,
    modificators: {
      fullWidth: `${className}--full-width`,
      ...mapValues(Margin, (margin) => `${className}--${margin}`),
    },
  },
};
