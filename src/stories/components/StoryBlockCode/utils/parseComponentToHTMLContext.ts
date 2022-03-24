import isArray from 'lodash/isArray';

// others
import { HtmlCode } from '../constants';
import { TComponentAttributes, TProps } from '../types';
import { TObject } from './../../../../types';

// utils
import { getHTMLElement } from './common';

const parseAttributesToHTML = (
  attributes: Array<TComponentAttributes>,
  classNames: TObject<string>
): string => {
  const context = attributes
    .map(
      ({ name, value }) =>
        ` ${getHTMLElement(classNames.attributeName, name)}${
          value !== undefined
            ? `="${getHTMLElement(classNames.attributeValue, value)}"`
            : ''
        }`
    )
    .join('');

  return getHTMLElement(classNames.attribute, context);
};

export const parseComponentToHTMLContext = (
  { attributes = [], children }: TProps,
  componentName = '',
  classNames: TObject<string>
): string => {
  const parsedComponent = getHTMLElement(
    classNames.componentName,
    componentName
  );
  const parsedAttributes = parseAttributesToHTML(attributes, classNames);

  if (children) {
    let parsedChildren = '';

    if (isArray(children)) {
      parsedChildren = `${children
        .map(({ componentName, props }) => {
          if (props) {
            return props
              .map((props) =>
                getHTMLElement(
                  classNames.children,
                  parseComponentToHTMLContext(props, componentName, classNames),
                  'div'
                )
              )
              .join('');
          }
          return getHTMLElement(
            classNames.children,
            parseComponentToHTMLContext({}, componentName, classNames),
            'div'
          );
        })
        .join('')}`;
    }

    return `${HtmlCode['<']}${parsedComponent}${parsedAttributes}${
      HtmlCode['>']
    }${parsedChildren ? parsedChildren : children}${
      HtmlCode['<']
    }/${parsedComponent}${HtmlCode['>']}`;
  }

  return `${HtmlCode['<']}${parsedComponent}${parsedAttributes} /${HtmlCode['>']}`;
};
