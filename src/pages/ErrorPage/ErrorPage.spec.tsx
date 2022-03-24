import { render } from '@testing-library/react';

// components
import ErrorPage from './ErrorPage';

describe('ErrorPage', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<ErrorPage />);

    expect(asFragment()).toMatchSnapshot();
  });
});
