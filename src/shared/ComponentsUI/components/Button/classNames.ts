import mapValues from 'lodash/mapValues';

// others
import { Color, Size, Variant } from './enums';

export const className = 'Button';

export const classNames = {
  [className]: {
    name: className,
    modificators: {
      fullwidth: `${className}--full-width`,
      forcedHover: {
        ...mapValues(Variant, (variant) => ({
          ...mapValues(
            Color,
            (color) => `${className}--${variant}--${color}--forced-hover`
          ),
        })),
      },
      ...{
        ...mapValues(Color, (color) => ({
          ...mapValues(
            Variant,
            (variant) => `${className}--${variant}--${color}`
          ),
        })),
      },
      ...{ ...mapValues(Size, (size) => `${className}--${size}`) },
      ...{ ...mapValues(Variant, (variant) => `${className}--${variant}`) },
    },
  },
  icon: {
    name: `${className}__icon`,
    modificators: {
      start: `${className}__icon--start`,
      end: `${className}__icon--end`,
      ...{ ...mapValues(Size, (size) => `${className}__icon--${size}`) },
    },
  },
};
