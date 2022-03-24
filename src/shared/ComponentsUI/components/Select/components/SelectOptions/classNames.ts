import mapValues from 'lodash/mapValues';

// others
import { Size } from '../../../TextField/enums';

export const className = 'SelectOptions';

export const classNames = {
  [className]: {
    name: className,
    modificators: {
      selected: `${className}--selected`,
      ...mapValues(Size, (size) => `${className}--${size}`),
    },
  },
  list: `${className}__list`,
};
