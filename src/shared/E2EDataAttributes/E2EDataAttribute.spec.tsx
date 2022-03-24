import { render } from '@testing-library/react';

// components
import E2EDataAttribute from './E2EDataAttribute';

// others
import { E2EAttribute } from './enums';

describe('E2EDataAttribute', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(
      <E2EDataAttribute type={E2EAttribute.componentBlock} value={1}>
        <span>child</span>
      </E2EDataAttribute>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});

describe('E2EDataAttribute', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(
      <E2EDataAttribute>
        <span>child</span>
      </E2EDataAttribute>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
