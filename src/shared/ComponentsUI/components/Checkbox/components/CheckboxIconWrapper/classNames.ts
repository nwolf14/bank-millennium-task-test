import mapValues from 'lodash/mapValues';

// others
import { Size } from '../../enums';

export const className = 'CheckboxIconWrapper';

export const classNames = {
  [className]: {
    name: className,
    modificators: {
      hover: `${className}--hover`,
      hoverChecked: `${className}--hover--checked`,
      focus: `${className}--focus`,
      focusChecked: `${className}--focus--checked`,
      ...mapValues(Size, (size) => `${className}--${size}`),
    },
  },
  uncheckedIcon: {
    name: `${className}__unchecked-icon`,
    modificators: {
      disabled: `${className}__unchecked-icon--disabled`,
      error: `${className}__unchecked-icon--error`,
    },
  },
  checkedIcon: {
    name: `${className}__checked-icon`,
    modificators: {
      disabled: `${className}__checked-icon--disabled`,
    },
  },

  circlePulse: {
    name: `${className}__circle-pulse`,
    modificators: {
      checked: `${className}__circle-pulse--checked`,
    },
  },
};
