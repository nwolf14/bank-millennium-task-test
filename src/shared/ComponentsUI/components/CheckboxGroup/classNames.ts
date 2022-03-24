import mapValues from 'lodash/mapValues';

// others
import { Margin } from '../../enums';

export const className = 'CheckboxGroup';

export const classNames = {
  [className]: {
    name: className,
    modificators: {
      ...mapValues(Margin, (margin) => `${className}--${margin}`),
    },
  },
  iconWrapperIndeterminateIcon: `${className}__icon-wrapper-indeterminate-icon`,
};
