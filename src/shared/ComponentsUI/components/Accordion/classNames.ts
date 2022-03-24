export const className = 'Accordion';

export const classNames = {
  [className]: className,
  header: {
    name: `${className}__header`,
    modificators: {
      expanded: `${className}__header--expanded`,
    },
  },
  arrow: {
    name: `${className}__arrow`,
    modificators: {
      expanded: `${className}__arrow--expanded`,
    },
  },
  wrapper: {
    name: `${className}__wrapper`,
    modificators: {
      expanded: `${className}__wrapper--expanded`,
    },
  },
};
