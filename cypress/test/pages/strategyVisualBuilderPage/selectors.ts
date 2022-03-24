// others
import { BlockNodeType } from './enums';
import { E2EAttribute, Selector } from '../../enums';

// utils
import { getAttribute } from '../../../../src/utils/dom/getAttribute';
import { getSelector } from '../../selectors';

export const getSelectorBlockNode = (
  blockNodeType: BlockNodeType,
  index: number
): string =>
  `${getAttribute(E2EAttribute.componentBlock, index)} ${getSelector(
    Selector.blockNode,
    E2EAttribute.componentBlockNode,
    blockNodeType
  )}`;

export const getSelectorInput = (
  attribute: E2EAttribute,
  value?: number | string
): string => `${getAttribute(attribute, value)}`;

export const getSelectorConnectorLine = (
  index: number,
  isSelected = false
): string => {
  const selectorConnector = getSelector(
    Selector.connector,
    E2EAttribute.componentConnector,
    index
  );
  const selectorConnectorLine = isSelected
    ? `${getSelector(Selector.connectorLineSelected)}${getAttribute(
        E2EAttribute.componentConnectorPath,
        0
      )}`
    : `${getSelector(Selector.connectorLine)}${getAttribute(
        E2EAttribute.componentConnectorPath,
        0
      )}`;

  return `${selectorConnector} ${selectorConnectorLine}`;
};
