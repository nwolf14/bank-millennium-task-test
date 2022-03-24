export const getDefaultValueInput = (type: string) => {
  if (type === 'checkbox') {
    return false;
  } else if (type === 'number') {
    return 0;
  }

  return '';
};
