import { fireEvent, render, waitFor } from '@testing-library/react';

// components
import ButtonIcon from './ButtonIcon';

// others
import { Size } from '../Button/enums';

describe('ButtonIcon', () => {
  const mockCallBack = jest.fn();

  it('should render child', () => {
    const { getByText } = render(<ButtonIcon>Click</ButtonIcon>);
    const button = getByText('Click');

    expect(button).toHaveTextContent('Click');
  });

  it('should append class', () => {
    const { container } = render(
      <ButtonIcon className="test">Click</ButtonIcon>
    );

    expect(container.firstChild).toHaveClass('test');
  });

  it('should not has disabled attribute', () => {
    const { container } = render(<ButtonIcon>Click</ButtonIcon>);

    expect(container.firstChild).not.toHaveAttribute('disabled');
  });

  it('should has disabled attribute', () => {
    const { container } = render(<ButtonIcon disabled>Click</ButtonIcon>);

    expect(container.firstChild).toHaveAttribute('disabled');
  });

  it('should render pulseEffect after click', async () => {
    const { getByText } = render(<ButtonIcon>Click</ButtonIcon>);

    fireEvent.click(getByText('Click'));
    await waitFor(
      () => {
        expect(getByText('Click').lastChild).toHaveClass('CirclePulse');
      },
      { timeout: 100 }
    );
  });

  it('should not render pulseEffect after click', async () => {
    const { getByText } = render(
      <ButtonIcon disablePulseEffect>Click</ButtonIcon>
    );

    fireEvent.click(getByText('Click'));
    await waitFor(
      () => {
        expect(getByText('Click').lastChild).toHaveTextContent('Click');
      },
      { timeout: 100 }
    );
  });

  it('should has forced hover', () => {
    const { container } = render(<ButtonIcon forcedHover>Click</ButtonIcon>);

    expect(container.firstChild).toHaveClass('ButtonIcon--forced-hover');
  });

  it('should fire onClick event', () => {
    const { getByText } = render(
      <ButtonIcon onClick={mockCallBack}>Click</ButtonIcon>
    );
    const button = getByText('Click');

    fireEvent.click(button);
    expect(mockCallBack.mock.calls.length).toBe(1);
  });

  it('should has medium size', () => {
    const { container } = render(<ButtonIcon>Click</ButtonIcon>);

    expect(container.firstChild).toHaveClass('ButtonIcon--medium');
  });

  it('should has large size', () => {
    const { container } = render(
      <ButtonIcon size={Size.large}>Click</ButtonIcon>
    );

    expect(container.firstChild).toHaveClass('ButtonIcon--large');
  });

  it('should has custom styles', () => {
    const { container } = render(
      <ButtonIcon style={{ width: '100%' }}>Click</ButtonIcon>
    );

    expect(container.firstChild).toHaveAttribute('style');
  });

  it('should has submit type', () => {
    const { container } = render(<ButtonIcon type="submit">Click</ButtonIcon>);

    expect(container.firstChild).toHaveAttribute('type', 'submit');
  });
});
