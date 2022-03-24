import classnames from 'classnames';
import { camelCase } from 'lodash';
import { createElement, FC, HTMLAttributes, ReactNode } from 'react';

// components
import { E2EAttribute } from '../../../E2EDataAttributes/enums';

// hooks
import { useTheme } from '../../../../hooks/useTheme/useTheme';

// others
import { className as classNameTypography, classNames } from './classNames';
import { DATA_TEST_PREFIX } from '../../../E2EDataAttributes/constants';
import { FontStyle, FontWeight, Variant } from './enums';

// styles
import './typography.scss';

export type TProps = {
  attributeValue?: string;
  children?: ReactNode;
  fontStyle?: FontStyle;
  fontWeight?: FontWeight;
  variant?: Variant;
} & HTMLAttributes<HTMLElement>;

const Typography: FC<TProps> = ({
  attributeValue = null,
  children,
  className = '',
  fontStyle = FontStyle.normal,
  fontWeight = FontWeight.regular,
  variant = Variant.text,
  ...restProps
}) => {
  const { classNamesWithTheme } = useTheme(classNames);

  if (!children) {
    return null;
  }

  return createElement(
    variant,
    {
      className: classnames(
        classNamesWithTheme[classNameTypography].name,
        className,
        classNamesWithTheme[classNameTypography].modificators[
          camelCase(fontWeight)
        ],
        classNamesWithTheme[classNameTypography].modificators[fontStyle],
        classNamesWithTheme[classNameTypography].modificators[
          camelCase(variant)
        ]
      ),
      [`${DATA_TEST_PREFIX}-${E2EAttribute.text}`]: attributeValue,
      ...restProps,
    },
    children
  );
};

export default Typography;
