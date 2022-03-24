import { fireEvent, render, waitFor } from '@testing-library/react';

// components
import RadioButton from './RadioButton';

// others
import { Size } from './enums';

jest.mock('react-svg', () => ({
  ReactSVG: (props: any) => <input {...props} />,
}));

describe('RadioButton', () => {
  const mockCallBack = jest.fn();

  beforeAll(() => {
    mockCallBack.mockClear();
  });

  it('should be unchecked', () => {
    const { container } = render(<RadioButton value="0" />);
    expect(container.firstChild?.firstChild).not.toBeChecked();
  });

  it('should be checked', () => {
    const { container } = render(<RadioButton name="Name" checked value="0" />);

    expect(container.firstChild?.firstChild).toBeChecked();
  });

  it('should append class', () => {
    const { container } = render(<RadioButton className="test" value="0" />);

    expect(container.firstChild).toHaveClass('test');
  });

  it('should append class circle wrapper', () => {
    const { container } = render(
      <RadioButton classNameCircleWrapper="test" value="0" />
    );

    expect(container.firstChild?.lastChild).toHaveClass('test');
  });

  it('should fireEvent onBlur on input', () => {
    const { container, getByTestId } = render(
      <RadioButton classNameCircleWrapper="test" value="0" />
    );

    fireEvent.focus(getByTestId('input'), {
      target: { value: '1' },
    });
    fireEvent.blur(getByTestId('input'), {
      target: { value: '1' },
    });

    expect(container.firstChild?.lastChild).not.toHaveClass(
      'RadioButtonCircleWrapper--focus'
    );
  });

  it('should fireEvent onFocus on input', () => {
    const { container, getByTestId } = render(
      <RadioButton classNameCircleWrapper="test" value="0" />
    );
    fireEvent.focus(getByTestId('input'), {
      target: { value: '1' },
    });

    expect(container.firstChild?.lastChild).toHaveClass(
      'RadioButtonCircleWrapper--focus'
    );
  });

  it('should fireEvent mouseEnter on input', () => {
    const { container, getByTestId } = render(
      <RadioButton classNameCircleWrapper="test" value="0" />
    );
    fireEvent.mouseEnter(getByTestId('input'), {
      target: { value: '1' },
    });

    expect(container.firstChild?.lastChild).toHaveClass(
      'RadioButtonCircleWrapper--hover'
    );
  });

  it('should fireEvent mouseLeave on input', () => {
    const { container, getByTestId } = render(
      <RadioButton classNameCircleWrapper="test" value="0" />
    );
    fireEvent.mouseEnter(getByTestId('input'), {
      target: { value: '1' },
    });
    fireEvent.mouseLeave(getByTestId('input'), {
      target: { value: '1' },
    });

    expect(container.firstChild?.lastChild).not.toHaveClass(
      'RadioButtonCircleWrapper--hover'
    );
  });

  it('should append class input', () => {
    const { container } = render(
      <RadioButton classNameInput="test" value="0" />
    );

    expect(container.firstChild?.firstChild).toHaveClass('test');
  });

  it('should append class label', () => {
    const { container } = render(
      <RadioButton classNameLabel="test" label="label" value="0" />
    );

    expect(container.firstChild?.lastChild).toHaveClass('test');
  });

  it('should be fireEvent onClick when user click on label', () => {
    render(
      <RadioButton
        onChange={mockCallBack}
        classNameLabel="test"
        label="label"
        value="0"
      />
    );

    fireEvent.click(document.getElementsByClassName('test')[0]);
    expect(mockCallBack.mock.calls.length).toBe(1);
  });

  it('should not has disabled attribute', () => {
    const { container } = render(<RadioButton value="0" />);

    expect(container.firstChild?.firstChild).not.toHaveAttribute('disabled');
  });

  it('should has disabled attribute', () => {
    const { container } = render(<RadioButton disabled value="0" />);

    expect(container.firstChild?.firstChild).toHaveAttribute('disabled');
  });

  it('should render pulseEffect after click', async () => {
    const { getByTestId } = render(<RadioButton value="0" />);

    fireEvent.click(getByTestId('input'));
    await waitFor(
      () => {
        expect(getByTestId('input').nextSibling?.lastChild).toHaveClass(
          'CirclePulse'
        );
      },
      { timeout: 100 }
    );
  });

  it('should not render pulseEffect after click', async () => {
    const { getByTestId } = render(
      <RadioButton disabledPulseEffect value="0" />
    );

    fireEvent.click(getByTestId('input'));
    await waitFor(
      () => {
        expect(getByTestId('input').nextSibling?.lastChild).toHaveClass(
          'RadioButtonCircleWrapper__circle-outline'
        );
      },
      { timeout: 100 }
    );
  });

  it('should has forced focus', () => {
    const { container } = render(<RadioButton forcedFocus value="0" />);

    expect(container.firstChild?.childNodes[1]).toHaveClass(
      'RadioButtonCircleWrapper--focus'
    );
  });

  it('should has forced hover', () => {
    const { container } = render(<RadioButton forcedHover value="0" />);

    expect(container.firstChild?.childNodes[1]).toHaveClass(
      'RadioButtonCircleWrapper--hover'
    );
  });

  it('should display proper label', () => {
    const { container } = render(<RadioButton label="Label" value="0" />);

    expect(container.firstChild?.lastChild).toHaveTextContent('Label');
  });

  it('should pass name', () => {
    const { container } = render(<RadioButton name="Name" value="0" />);

    expect(container.firstChild?.firstChild).toHaveAttribute('name', 'Name');
  });

  it('should fire onChange event', () => {
    const { getByTestId } = render(
      <RadioButton onChange={mockCallBack} value="0" />
    );
    const radioButton = getByTestId('input');

    fireEvent.click(radioButton);
    expect(mockCallBack.mock.calls.length).toBe(1);
  });

  it('should has medium size', () => {
    const { container } = render(<RadioButton value="0" />);

    expect(container.firstChild?.firstChild).toHaveClass(
      'RadioButtonInput--medium'
    );
    expect(container.firstChild?.childNodes[1]).toHaveClass(
      'RadioButtonCircleWrapper--medium'
    );
  });

  it('should has medium size', () => {
    const { container } = render(<RadioButton size={Size.large} value="0" />);

    expect(container.firstChild?.firstChild).toHaveClass(
      'RadioButtonInput--large'
    );
    expect(container.firstChild?.childNodes[1]).toHaveClass(
      'RadioButtonCircleWrapper--large'
    );
  });

  it('should has custom styles', () => {
    const { container } = render(
      <RadioButton style={{ width: '100%' }} value="0" />
    );

    expect(container.firstChild).toHaveAttribute('style');
  });

  it('should pass value', () => {
    const { container } = render(<RadioButton value="0" />);

    expect(container.firstChild?.firstChild).toHaveAttribute('value', '0');
  });
});
