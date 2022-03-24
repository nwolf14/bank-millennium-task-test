// others
import { E2EAttribute } from '../../shared/E2EDataAttributes/enums';

export const getAttribute = (
  attribute: E2EAttribute,
  value?: boolean | number | string
): string =>
  value !== undefined
    ? `[data-test-${attribute}="${value}"]`
    : `[data-test-${attribute}]`;
