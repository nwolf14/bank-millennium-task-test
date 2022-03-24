import { fireEvent, render } from '@testing-library/react';
import { TooltipPosition } from './enums';

// components
import Tooltip from './Tooltip';

describe('Tooltip', () => {
  it('should set tooltip position vertical automatically after enter', () => {
    const { container, getByText } = render(
      <Tooltip autoPositioning content="content">
        ?
      </Tooltip>
    );

    fireEvent.mouseEnter(getByText('?'), { clientX: 1024, clientY: 1024 });
    expect(container.firstChild?.lastChild).toHaveClass(
      'Tooltip__wrapper--top-end'
    );

    fireEvent.mouseEnter(getByText('?'), { clientX: 1024, clientY: 0 });
    expect(container.firstChild?.lastChild).toHaveClass(
      'Tooltip__wrapper--bottom-end'
    );
  });

  it('should set tooltip position horizontal automatically after enter', () => {
    const { container, getByText } = render(
      <Tooltip autoPositioning autoPositioningHorizontal content="content">
        ?
      </Tooltip>
    );

    fireEvent.mouseEnter(getByText('?'), { clientX: 1024, clientY: 1024 });
    expect(container.firstChild?.lastChild).toHaveClass(
      'Tooltip__wrapper--left-end'
    );

    fireEvent.mouseEnter(getByText('?'), { clientX: 0, clientY: 1024 });
    expect(container.firstChild?.lastChild).toHaveClass(
      'Tooltip__wrapper--right-end'
    );
  });

  it('should adjust correct placement', () => {
    const { container, getByText } = render(
      <Tooltip
        autoPositioning
        autoPositioningHorizontal
        autoPositioningArrowPlacement="Start"
        content="content"
      >
        ?
      </Tooltip>
    );

    fireEvent.mouseEnter(getByText('?'), { clientX: 1024, clientY: 1024 });
    expect(container.firstChild?.lastChild).toHaveClass(
      'Tooltip__wrapper--left-start'
    );

    fireEvent.mouseEnter(getByText('?'), { clientX: 0, clientY: 1024 });
    expect(container.firstChild?.lastChild).toHaveClass(
      'Tooltip__wrapper--right-start'
    );
  });

  it('should pass children', () => {
    const { container } = render(<Tooltip content="content">?</Tooltip>);

    expect(container.firstChild?.firstChild).toHaveTextContent('?');
  });

  it('should pass content', () => {
    const { container } = render(<Tooltip content="content">?</Tooltip>);

    expect(
      container.firstChild?.lastChild?.firstChild?.firstChild
    ).toHaveTextContent('content');
  });

  it('should pass correct position', () => {
    const { container, getByText } = render(
      <Tooltip position={TooltipPosition.leftStart} content="content">
        ?
      </Tooltip>
    );

    fireEvent.mouseEnter(getByText('?'), { clientX: 1024, clientY: 1024 });
    expect(container.firstChild?.lastChild).toHaveClass(
      'Tooltip__wrapper--left-start'
    );
  });

  it('should has custom styles', () => {
    const { container } = render(
      <Tooltip content="content" style={{ width: '100%' }}>
        ?
      </Tooltip>
    );

    expect(container.firstChild).toHaveAttribute('style');
  });

  it('should be visible after enter mouse & invisible after leave', () => {
    const { container, getByText } = render(
      <Tooltip content="content">?</Tooltip>
    );

    fireEvent.mouseEnter(getByText('?'), { clientX: 1024, clientY: 1024 });
    expect(container.firstChild?.lastChild).toHaveClass(
      'Tooltip__wrapper--visible'
    );

    fireEvent.mouseLeave(getByText('?'), { clientX: 1024, clientY: 1024 });
    expect(container.firstChild?.lastChild).not.toHaveClass(
      'Tooltip__wrapper--visible'
    );
  });
});
