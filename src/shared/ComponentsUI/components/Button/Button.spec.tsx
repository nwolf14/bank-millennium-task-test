import { fireEvent, render, waitFor } from '@testing-library/react';

// components
import Button from './Button';

// others
import { Color, Size, Variant } from './enums';

describe('Button', () => {
  const mockCallBack = jest.fn();

  it('should render child', () => {
    const { getByText } = render(<Button>Click</Button>);
    const button = getByText('Click');

    expect(button).toHaveTextContent('Click');
  });

  it('should append class', () => {
    const { container } = render(<Button className="test">Click</Button>);

    expect(container.firstChild).toHaveClass('test');
  });

  it('should be primary color', () => {
    const { container } = render(<Button className="test">Click</Button>);

    expect(container.firstChild).toHaveClass('Button--contained--primary');
  });

  it('should be secondary color', () => {
    const { container } = render(
      <Button className="test" color={Color.secondary}>
        Click
      </Button>
    );

    expect(container.firstChild).toHaveClass('Button--contained--secondary');
  });

  it('should not has disabled attribute', () => {
    const { container } = render(<Button>Click</Button>);

    expect(container.firstChild).not.toHaveAttribute('disabled');
  });

  it('should has disabled attribute', () => {
    const { container } = render(<Button disabled>Click</Button>);

    expect(container.firstChild).toHaveAttribute('disabled');
  });

  it('should render rippleEffect after click', async () => {
    const { getByText } = render(<Button>Click</Button>);

    fireEvent.click(getByText('Click'));
    await waitFor(
      () => {
        expect(getByText('Click').lastChild).toHaveClass(
          'Button--contained--primary--ripple'
        );
      },
      { timeout: 100 }
    );
  });

  it('should not render rippleEffect after click', async () => {
    const { getByText } = render(<Button disableRippleEffect>Click</Button>);

    fireEvent.click(getByText('Click'));
    await waitFor(
      () => {
        expect(getByText('Click').lastChild).toHaveTextContent('Click');
      },
      { timeout: 100 }
    );
  });

  it('should has image after children', () => {
    const { container } = render(<Button endIcon="icon">Click</Button>);

    expect(container.firstChild?.lastChild).toHaveClass('Button__icon');
  });

  it('should has forced hover', () => {
    const { container } = render(<Button forcedHover>Click</Button>);

    expect(container.firstChild).toHaveClass(
      'Button--contained--primary--forced-hover'
    );
  });

  it('should has fullWidth', () => {
    const { container } = render(<Button fullWidth>Click</Button>);

    expect(container.firstChild).toHaveClass('Button--full-width');
  });

  it('should fire onClick event', () => {
    const { getByText } = render(<Button onClick={mockCallBack}>Click</Button>);
    const button = getByText('Click');

    fireEvent.click(button);
    expect(mockCallBack.mock.calls.length).toBe(1);
  });

  it('should has medium size', () => {
    const { container } = render(<Button>Click</Button>);

    expect(container.firstChild).toHaveClass('Button--medium');
  });

  it('should has large size', () => {
    const { container } = render(<Button size={Size.large}>Click</Button>);

    expect(container.firstChild).toHaveClass('Button--large');
  });

  it('should has image before children', () => {
    const { container } = render(<Button startIcon="icon">Click</Button>);

    expect(container.firstChild?.firstChild).toHaveClass('Button__icon');
  });

  it('should has custom styles', () => {
    const { container } = render(
      <Button style={{ width: '100%' }}>Click</Button>
    );

    expect(container.firstChild).toHaveAttribute('style');
  });

  it('should has submit type', () => {
    const { container } = render(<Button type="submit">Click</Button>);

    expect(container.firstChild).toHaveAttribute('type', 'submit');
  });

  it('should be contained variant', () => {
    const { container } = render(<Button>Click</Button>);

    expect(container.firstChild).toHaveClass('Button--contained');
  });

  it('should be text variant', () => {
    const { container } = render(<Button variant={Variant.text}>Click</Button>);

    expect(container.firstChild).toHaveClass('Button--text');
  });
});
