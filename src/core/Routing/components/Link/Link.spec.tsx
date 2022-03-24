import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

// components
import Link from './Link';

describe('Link', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(
      <BrowserRouter>
        <Link href="/">Link</Link>
      </BrowserRouter>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});

describe('Link', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(
      <BrowserRouter>
        <Link href="https://">Link</Link>
      </BrowserRouter>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});

describe('Link', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(
      <BrowserRouter>
        <Link target="_blank">Link</Link>
      </BrowserRouter>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
