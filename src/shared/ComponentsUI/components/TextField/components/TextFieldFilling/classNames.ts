export const className = 'TextFieldFilling';

export const classNames = {
  [className]: {
    name: className,
    modificators: {
      disabled: `${className}--disabled`,
      error: `${className}--error`,
      errorFocus: `${className}--error-focus`,
      hover: `${className}--hover`,
      focus: `${className}--focus`,
    },
  },
  legend: {
    name: `${className}__legend`,
    modificators: {
      focus: `${className}__legend--focus`,
    },
  },
};
