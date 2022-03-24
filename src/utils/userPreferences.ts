// others
import { Theme } from '../core/ContextProvider/enums';
import { THEME } from '../core/ContextProvider/constants';

export const getThemePreferences = (): Theme => {
  const theme = localStorage.getItem(THEME) as Theme;

  if (theme) {
    return theme;
  }

  return window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
    ? Theme.dark
    : Theme.light;
};
