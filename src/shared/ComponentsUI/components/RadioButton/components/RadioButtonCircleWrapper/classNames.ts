import mapValues from 'lodash/mapValues';

// others
import { Size } from '../../enums';

export const className = 'RadioButtonCircleWrapper';

export const classNames = {
  [className]: {
    name: className,
    modificators: {
      disabled: `${className}--disabled`,

      hover: `${className}--hover`,
      hoverChecked: `${className}--hover--checked`,
      focus: `${className}--focus`,
      focusChecked: `${className}--focus--checked`,
      ...mapValues(Size, (size) => `${className}--${size}`),
    },
  },
  circleOutline: {
    name: `${className}__circle-outline`,
    modificators: {
      checked: `${className}__circle-outline--checked`,
      error: `${className}__circle-outline--error`,
      ...mapValues(Size, (size) => `${className}__circle-outline--${size}`),
    },
  },
  circle: {
    name: `${className}__circle`,
    modificators: {
      checked: `${className}__circle--checked`,
      ...mapValues(Size, (size) => `${className}__circle--${size}`),
    },
  },
  circlePulse: {
    name: `${className}__circle-pulse`,
    modificators: {
      checked: `${className}__circle-pulse--checked`,
    },
  },
};
