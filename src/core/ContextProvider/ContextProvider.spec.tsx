import { useContext } from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';

// core
import ContextProvider, { Context } from './ContextProvider';

// others
import { Theme } from './enums';

const Component = () => {
  const { theme, setTheme } = useContext(Context);

  return (
    <>
      <div>
        {theme}
        <button onClick={() => setTheme(Theme.dark)} />
      </div>
    </>
  );
};

describe('ContextProvider', () => {
  it('should have light mode', () => {
    const { container } = render(
      <ContextProvider>
        <Component />
      </ContextProvider>
    );

    expect(container).toHaveTextContent(Theme.light);
  });

  it('should have dark mode after click', async () => {
    const { container } = render(
      <ContextProvider>
        <Component />
      </ContextProvider>
    );

    fireEvent.click(container.firstChild.lastChild);
    await waitFor(
      () => {
        expect(container).toHaveTextContent(Theme.dark);
      },
      { timeout: 500 }
    );
  });
});
