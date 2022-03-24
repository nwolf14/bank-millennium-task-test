import classnames from 'classnames';
import { FC, ReactNode, useRef, useState } from 'react';

// components
import P from '../Typography/Typography';

// hooks
import { useTheme } from '../../../../hooks/useTheme/useTheme';

// others
import { ReactComponent as Arrow } from '../../../../assets/icons/arrow.svg';
import { className as classNameAccordion, classNames } from './classNames';

// styles
import './accordion.scss';

export type TProps = {
  children: ReactNode;
  className?: string;
  classNameContent?: string;
  classNameHeader?: string;
  classNameWrapper?: string;
  defaultExpanded?: boolean;
  expanded?: boolean;
  header?: string;
  onClick?: (expanded: boolean) => void;
  style?: { [key: string]: number | string };
};

const Accordion: FC<TProps> = ({
  children,
  className = '',
  classNameContent = '',
  classNameHeader = '',
  classNameWrapper = '',
  defaultExpanded = false,
  expanded: controlledExpanded = null,
  header = '',
  onClick,
  style = {},
}) => {
  const [expanded, setExpanded] = useState(defaultExpanded);
  const [contentHeight, setContentHeight] = useState(0);
  const { classNamesWithTheme } = useTheme(classNames);
  const contentRef = useRef<HTMLDivElement>(null);

  const getExpanded = (): boolean =>
    controlledExpanded !== null ? controlledExpanded : expanded;

  const onClickHandler = (): void => {
    const isExpanded = !getExpanded();
    const height = contentRef.current?.clientHeight || 0;

    if (onClick) {
      onClick(isExpanded);
    }

    setContentHeight(isExpanded ? height : 0);
    setExpanded(isExpanded);
  };

  return (
    <div
      className={classnames(classNamesWithTheme[classNameAccordion], className)}
      style={style}
    >
      <P
        className={classnames(
          classNamesWithTheme.header.name,
          {
            [classNamesWithTheme.header.modificators.expanded]: getExpanded(),
          },
          classNameHeader
        )}
        onClick={onClickHandler}
      >
        {header}
        <Arrow
          className={classnames(classNamesWithTheme.arrow.name, {
            [classNamesWithTheme.arrow.modificators.expanded]: getExpanded(),
          })}
        />
      </P>
      <div
        className={classnames(
          classNamesWithTheme.wrapper.name,
          {
            [classNamesWithTheme.wrapper.modificators.expanded]: getExpanded(),
          },
          classNameWrapper
        )}
        style={{ maxHeight: `${contentHeight}px` }}
      >
        <div className={classNameContent} ref={contentRef}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
