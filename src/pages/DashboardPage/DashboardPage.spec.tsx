import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

// components
import DashboardPage from './DashboardPage';

describe('DashboardPage', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(
      <BrowserRouter>
        <DashboardPage />
      </BrowserRouter>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
