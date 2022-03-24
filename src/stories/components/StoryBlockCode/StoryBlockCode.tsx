import classnames from 'classnames';
import { FC } from 'react';

// hooks
import { useTheme } from '../../../hooks/useTheme/useTheme';

// others
import { className as StoryBlockCodeClassName, classNames } from './classNames';
import { TStoryBlockCode } from './types';

// utils
import { parseComponentToHTMLContext } from './utils/parseComponentToHTMLContext';
import { parseImportToHTMLContext } from './utils/parseImportToHTMLContext';

// styles
import './story-block-code.scss';

export type TProps = {
  blockCodeData: TStoryBlockCode;
  className?: string;
};

const StoryBlockCode: FC<TProps> = ({ blockCodeData, className = '' }) => {
  const { componentName = '', props = [], imports } = blockCodeData;
  const { classNamesWithTheme } = useTheme(classNames);

  return (
    <div
      className={classnames(
        classNamesWithTheme[StoryBlockCodeClassName],
        className
      )}
    >
      {imports.map((importObj, key) => (
        <p
          className={classNamesWithTheme.imports}
          dangerouslySetInnerHTML={{
            __html: parseImportToHTMLContext(importObj, classNamesWithTheme),
          }}
          key={key}
        />
      ))}
      {props.length > 0 && <div className={classNamesWithTheme.separator} />}
      {props.map((props, key) => (
        <div
          className={classNamesWithTheme.components}
          dangerouslySetInnerHTML={{
            __html: parseComponentToHTMLContext(
              props,
              componentName,
              classNamesWithTheme
            ),
          }}
          key={key}
        />
      ))}
    </div>
  );
};

export default StoryBlockCode;
