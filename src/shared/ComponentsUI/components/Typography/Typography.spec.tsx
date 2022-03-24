import { render } from '@testing-library/react';

// components
import Typography from './Typography';

describe('Typography', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Typography />);

    expect(asFragment()).toMatchSnapshot();
  });
});

describe('Typography', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Typography>Text</Typography>);

    expect(asFragment()).toMatchSnapshot();
  });
});
