// others
import { E2EAttribute } from '../../../shared/E2EDataAttributes/enums';

// utils
import { getAttribute } from '../getAttribute';

describe('getAttribute', () => {
  it('Should return proper attribute', () => {
    expect(getAttribute(E2EAttribute.componentBlock)).toEqual(
      '[data-test-component-block]'
    );
  });

  it('Should return proper attribute with value', () => {
    expect(getAttribute(E2EAttribute.componentBlock, 0)).toEqual(
      '[data-test-component-block="0"]'
    );
  });
});
