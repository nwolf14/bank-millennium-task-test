import { render } from '@testing-library/react';

// components
import NotFoundPage from './NotFoundPage';

describe('NotFoundPage', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<NotFoundPage />);

    expect(asFragment()).toMatchSnapshot();
  });
});
