// others
import { classNames } from './classNames';
import { E2EAttribute, Selector } from './enums';

// utils
import { getAttribute } from '../../src/utils/dom/getAttribute';

export const getSelector = (
  selector: Selector,
  e2eAttribute: E2EAttribute = E2EAttribute.unselected,
  indexAttribute?: boolean | number | string
): string =>
  indexAttribute !== undefined
    ? `${classNames[selector]}${getAttribute(e2eAttribute, indexAttribute)}`
    : classNames[selector];
