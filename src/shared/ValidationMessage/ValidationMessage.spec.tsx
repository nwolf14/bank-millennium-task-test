import { render } from '@testing-library/react';

// components
import ValidationMessage from './ValidationMessage';

describe('ValidationMessage', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<ValidationMessage />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<ValidationMessage error="error" />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('matches snapshot', () => {
    const { asFragment } = render(
      <ValidationMessage helperText="helperText" />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('matches snapshot', () => {
    const { asFragment } = render(
      <ValidationMessage error="error" helperText="helperText" />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
