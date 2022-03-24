import mapValues from 'lodash/mapValues';

// others
import { Size } from './enums';

export const className = 'RadioButton';

export const classNames = {
  [className]: className,
  input: {
    name: `${className}__input`,
    modificators: {
      forcedFocus: `${className}__input--forced-focus`,
      forcedHover: `${className}__input--forced-hover`,
      ...mapValues(Size, (size) => `${className}__input--${size}`),
    },
  },
  circleWrapper: {
    name: `${className}__circle-wrapper`,
    modificators: {
      ...mapValues(Size, (size) => `${className}__circle-wrapper--${size}`),
    },
  },
  circleOutline: `${className}__circle-outline`,
  circle: `${className}__circle`,
  circlePulse: `${className}__circle-pulse`,
  label: `${className}__label`,
};
