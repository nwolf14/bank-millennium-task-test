export const className = 'Modal';

export const classNames = {
  [className]: {
    name: className,
    modificators: {
      opened: `${className}--opened`,
    },
  },
  container: {
    name: `${className}__container`,
    modificators: {
      opened: `${className}__container--opened`,
    },
  },
  header: `${className}__header`,
  close: `${className}__close`,
  content: `${className}__content`,
  footer: `${className}__footer`,
};
