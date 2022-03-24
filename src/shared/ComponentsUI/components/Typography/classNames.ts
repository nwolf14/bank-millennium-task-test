import mapValues from 'lodash/mapValues';
import { FontStyle, FontWeight } from './enums';

export const className = 'Typography';

export const classNames = {
  [className]: {
    name: className,
    modificators: {
      h1: `${className}--h1`,
      h2: `${className}--h2`,
      h3: `${className}--h3`,
      h4: `${className}--h4`,
      h5: `${className}--h5`,
      h6: `${className}--h6`,
      p: `${className}--text`,
      small: `${className}--small-text`,
      ...mapValues(FontStyle, (fontStyle) => `${className}--${fontStyle}`),
      ...mapValues(FontWeight, (fontWeight) => `${className}--${fontWeight}`),
    },
  },
};
