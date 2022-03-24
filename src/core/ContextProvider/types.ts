// others
import { Theme } from './enums';

export type TContext = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};
