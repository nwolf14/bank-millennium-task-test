import isObject from 'lodash/isObject';
import mapValues from 'lodash/mapValues';
import { useContext, useEffect, useState } from 'react';

// core
import { Context } from '../../core/ContextProvider/ContextProvider';

// others
import { Theme } from '../../core/ContextProvider/enums';
import { TObject } from '../../types';

type THookType = {
  classNamesWithTheme: TObject<any>;
  theme: Theme;
};

export const useTheme = (classNames: TObject<any> = {}): THookType => {
  const [classNamesWithTheme, setClassNamesWithTheme] = useState(classNames);
  const { theme } = useContext(Context);

  const getClassNameWithTheme = (className: string) =>
    theme === Theme.dark ? `${className} ${className}--dark` : className;

  const getClassNamesWithTheme = (classNames: TObject<any>): TObject<any> =>
    mapValues(classNames, (className: TObject<string> | string) => {
      if (isObject(className)) {
        return getClassNamesWithTheme(className);
      }

      return getClassNameWithTheme(className);
    });

  useEffect(() => {
    setClassNamesWithTheme(getClassNamesWithTheme(classNamesWithTheme));
  }, [theme]);

  return { classNamesWithTheme, theme };
};
