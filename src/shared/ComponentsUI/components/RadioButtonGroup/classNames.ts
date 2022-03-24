import mapValues from 'lodash/mapValues';

// others
import { Margin } from '../../enums';

export const className = 'RadioButtonGroup';

export const classNames = {
  [className]: {
    name: className,
    modificators: {
      ...mapValues(Margin, (margin) => `${className}--${margin}`),
    },
  },
  label: `${className}__label`,
};
