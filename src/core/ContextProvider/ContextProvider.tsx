import React, {
  createContext,
  FC,
  ReactNode,
  useEffect,
  useState,
} from 'react';

// others
import { TContext } from './types';
import { Theme } from './enums';
import { THEME } from './constants';

// utils
import { getThemePreferences } from '../../utils/userPreferences';

type TProps = {
  children: ReactNode;
};

const defaultState = {
  theme: (process.env.STORYBOOK_THEME as Theme) || getThemePreferences(),
  setTheme: (theme: Theme) => localStorage.setItem(THEME, theme),
};

export const Context: React.Context<TContext> = createContext(defaultState);

const ContextProvider: FC<TProps> = ({ children }) => {
  const [theme, setTheme] = useState(defaultState.theme);

  const setThemeHandler = (theme: Theme) => {
    defaultState.setTheme(theme);
    setTheme(theme);
  };

  useEffect(() => {
    document.body.style.colorScheme = theme;
  }, [theme]);

  return (
    <Context.Provider
      value={{
        theme,
        setTheme: setThemeHandler,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
