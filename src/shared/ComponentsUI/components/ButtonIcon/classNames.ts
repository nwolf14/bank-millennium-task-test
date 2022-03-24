import mapValues from 'lodash/mapValues';

// others
import { Size } from '../Button/enums';

export const className = 'ButtonIcon';

export const classNames = {
  [className]: {
    name: className,
    modificators: {
      forcedHover: `${className}--forced-hover`,
      ...mapValues(Size, (size) => `${className}--${size}`),
    },
  },
  circlePulse: {
    name: `${className}__circle-pulse`,
    modificators: {
      ...mapValues(Size, (size) => `${className}__circle-pulse--${size}`),
    },
  },
};
