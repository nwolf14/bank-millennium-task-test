import mapValues from 'lodash/mapValues';

// others
import { Color, Variant } from '../Button/enums';
import { Orientation } from './enums';

export const className = 'ButtonGroup';

export const buttonClassName = {
  ...mapValues(
    Orientation,
    (orientation) => `${className}--${orientation}__button`
  ),
};

export const classNames = {
  [className]: {
    name: className,
    modificators: {
      ...mapValues(
        Orientation,
        (orientation) => `${className}--${orientation}`
      ),
    },
  },
  button: {
    name: {
      ...buttonClassName,
    },
    modificators: {
      forcedHover: {
        ...mapValues(buttonClassName, (className) => ({
          ...mapValues(Variant, (variant) => ({
            ...mapValues(
              Color,
              (color) => `${className}--${variant}--${color}--forced-hover`
            ),
          })),
        })),
      },
      ...{
        ...mapValues(Color, (color) => ({
          ...mapValues(Variant, (variant) => ({
            ...mapValues(
              buttonClassName,
              (className) => `${className}--${variant}--${color}`
            ),
          })),
        })),
      },
      ...{
        ...mapValues(Variant, (variant) => ({
          ...mapValues(
            buttonClassName,
            (className) => `${className}--${variant}`
          ),
        })),
      },
    },
  },
};
