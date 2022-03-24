import mapValues from 'lodash/mapValues';

// others
import { Margin } from '../../enums';
import { Size } from '../TextField/enums';

export const className = 'Select';

export const classNames = {
  [className]: {
    name: className,
    modificators: {
      ...mapValues(Margin, (margin) => `${className}--${margin}`),
    },
  },
  chevron: {
    name: `${className}__chevron`,
    modificators: {
      disabled: `${className}__chevron--disabled`,
      error: `${className}__chevron--error`,
      selected: `${className}__chevron--selected`,
      ...mapValues(Size, (size) => `${className}__chevron--${size}`),
    },
  },
  textField: `${className}__text-field`,
  textFieldWrapper: `${className}__text-field__wrapper`,
  textFieldInput: {
    name: `${className}__text-field__input`,
    modificators: {
      error: `${className}__text-field__input--error`,
    },
  },
};
