export const getInitialValue = (
  multiple: boolean,
  defaultValue?: null | string | Array<string>
): string | Array<string> => {
  if (defaultValue !== null) {
    return defaultValue as string | Array<string>;
  }

  return multiple ? [] : '';
};
