import camelCase from 'lodash/camelCase';
import classnames from 'classnames';
import { FC, ReactNode, useEffect } from 'react';

// components
import StoryBlockCode, {
  TProps as TStoryBlockCodeProps,
} from '../StoryBlockCode/StoryBlockCode';

// hooks
import { useTheme } from '../../../hooks/useTheme/useTheme';

// others
import { className as classNameStoryComponent, classNames } from './classNames';
import { ContentAlignItems, ContentDisplay, ContentGridFlow } from './enums';

// styles
import './story-component.scss';

type TProps = TStoryBlockCodeProps & {
  children?: ReactNode;
  className?: string;
  contentAlignItems?: ContentAlignItems;
  contentDisplay?: ContentDisplay;
  contentGridFlow?: ContentGridFlow;
  description?: Array<string>;
  flex?: boolean;
  title: string;
};

const StoryComponent: FC<TProps> = ({
  children,
  className = '',
  contentAlignItems = ContentAlignItems.center,
  contentDisplay = ContentDisplay.grid,
  contentGridFlow = ContentGridFlow.column,
  description = [],
  title,
  ...restProps
}) => {
  const { classNamesWithTheme, theme } = useTheme(classNames);

  useEffect(() => {
    document.body.style.colorScheme = theme;
  }, [theme]);

  return (
    <section
      className={classnames(
        classNamesWithTheme[classNameStoryComponent],
        className
      )}
    >
      <h2 className={classNamesWithTheme.title}>{title}</h2>
      {description.map((description, key) => (
        <p
          className={classNamesWithTheme.description}
          dangerouslySetInnerHTML={{ __html: description }}
          key={key}
        />
      ))}
      {children && (
        <section
          className={classnames(
            classNamesWithTheme.content.name,
            classNamesWithTheme.content.modificators[contentAlignItems],
            classNamesWithTheme.content.modificators[contentDisplay],
            classNamesWithTheme.content.modificators[camelCase(contentGridFlow)]
          )}
        >
          {children}
        </section>
      )}
      <StoryBlockCode
        className={classNamesWithTheme.storyBlockCode}
        {...restProps}
      />
    </section>
  );
};

export default StoryComponent;
