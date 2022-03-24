import classnames from 'classnames';
import { useRef } from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';

// hooks
import { useOutsideClick } from './useOutsideClick';

const Component = () => {
  const ref = useRef(null);
  const { selected, setSelected } = useOutsideClick(ref);

  return (
    <>
      <p>Outside</p>
      <div
        onClick={() => setSelected(true)}
        className={classnames('container', [
          { 'container--selected': selected },
        ])}
        ref={ref}
      >
        Click
      </div>
    </>
  );
};

describe('useOutsideClick', () => {
  it('should be unselected', () => {
    const { container } = render(<Component />);

    expect(container.lastChild).toHaveClass('container');
  });

  it('should be selected', async () => {
    const { container, getByText } = render(<Component />);

    fireEvent.click(getByText('Click'));
    expect(container.lastChild).toHaveClass('container container--selected');
  });

  it('should be unselected after click outside', async () => {
    const { container, getByText } = render(<Component />);

    fireEvent.click(getByText('Click'));
    expect(container.lastChild).toHaveClass('container container--selected');

    fireEvent.mouseDown(getByText('Outside'));
    await waitFor(
      () => {
        expect(container.lastChild).toHaveClass('container');
      },
      { timeout: 1000 }
    );
  });
});
