import mapValues from 'lodash/mapValues';

// others
import { TooltipPosition } from './enums';

export const className = 'Tooltip';

export const classNames = {
  [className]: className,
  wrapper: {
    name: `${className}__wrapper`,
    modificators: {
      visible: `${className}__wrapper--visible`,
      ...mapValues(
        TooltipPosition,
        (tooltipPosition) => `${className}__wrapper--${tooltipPosition}`
      ),
    },
  },
  content: `${className}__content`,
  arrow: {
    name: `${className}__arrow`,
    modificators: {
      ...mapValues(
        TooltipPosition,
        (tooltipPosition) => `${className}__arrow--${tooltipPosition}`
      ),
    },
  },
};
