import { render } from '@testing-library/react';

// components
import RouteTransitionLoader from './RouteTransitionLoader';

describe('RouteTransitionLoader', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<RouteTransitionLoader />);

    expect(asFragment()).toMatchSnapshot();
  });
});
