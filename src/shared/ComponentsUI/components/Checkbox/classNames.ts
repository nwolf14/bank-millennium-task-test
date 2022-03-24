import mapValues from 'lodash/mapValues';

// others
import { Margin } from '../../enums';
import { Size } from './enums';

export const className = 'Checkbox';

export const classNames = {
  [className]: {
    name: className,
    modificators: {
      ...mapValues(Margin, (margin) => `${className}--${margin}`),
    },
  },
  wrapper: `${className}__wrapper`,
  input: {
    name: `${className}__input`,
    modificators: {
      forcedFocus: `${className}__input--forced-focus`,
      forcedHover: `${className}__input--forced-hover`,
      ...mapValues(Size, (size) => `${className}__input--${size}`),
    },
  },
  iconWrapper: {
    name: `${className}__icon-wrapper`,
    modificators: {
      ...mapValues(Size, (size) => `${className}__icon-wrapper--${size}`),
    },
  },
  uncheckedIcon: `${className}__unchecked-icon`,
  checkedIcon: `${className}__checked-icon`,
  circlePulse: `${className}__circle-pulse`,
  label: `${className}__label`,
};
