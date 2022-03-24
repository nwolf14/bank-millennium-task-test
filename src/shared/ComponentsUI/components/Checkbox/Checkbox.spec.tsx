import { fireEvent, render, waitFor } from '@testing-library/react';

// components
import Checkbox from './Checkbox';

// others
import { Margin } from '../../enums';
import { Size } from './enums';

describe('Checkbox', () => {
  const mockCallBack = jest.fn();

  it('should be unchecked', () => {
    const { container } = render(<Checkbox />);
    expect(container.firstChild?.firstChild).not.toBeChecked();
  });

  it('should be checked', () => {
    const { container } = render(<Checkbox defaultValue />);
    expect(container.firstChild?.firstChild?.firstChild).toBeChecked();
  });

  it('should render checked icon', () => {
    const { container } = render(<Checkbox defaultValue />);
    expect(
      container.firstChild?.firstChild?.childNodes[1].firstChild
    ).toHaveClass('CheckboxIconWrapper__checked-icon');
  });

  it('should append class', () => {
    const { container } = render(<Checkbox className="test" />);

    expect(container.firstChild).toHaveClass('test');
  });

  it('should append class icon wrapper', () => {
    const { container } = render(<Checkbox classNameIconWrapper="test" />);

    expect(container.firstChild?.firstChild?.lastChild).toHaveClass('test');
  });

  it('should append class input', () => {
    const { container } = render(<Checkbox classNameInput="test" />);

    expect(container.firstChild?.firstChild?.firstChild).toHaveClass('test');
  });

  it('should append class label', () => {
    const { container } = render(
      <Checkbox classNameLabel="test" label="label" />
    );

    expect(container.firstChild?.firstChild?.lastChild).toHaveClass('test');
  });

  it('should fireEvent onFocus', () => {
    const { container, getByTestId } = render(<Checkbox />);
    fireEvent.focus(getByTestId('input'), { target: { value: '1' } });

    expect(container.firstChild?.firstChild?.lastChild).toHaveClass(
      'CheckboxIconWrapper--focus'
    );
  });

  it('should fireEvent onBlur', () => {
    const { container, getByTestId } = render(<Checkbox />);

    fireEvent.focus(getByTestId('input'), { target: { value: '1' } });
    fireEvent.blur(getByTestId('input'), { target: { value: '1' } });

    expect(container.firstChild?.firstChild?.lastChild).not.toHaveClass(
      'CheckboxIconWrapper--focus'
    );
  });

  it('should fireEvent onMouseEnter', () => {
    const { container, getByTestId } = render(<Checkbox />);

    fireEvent.mouseEnter(getByTestId('input'), { target: { value: '1' } });

    expect(container.firstChild?.firstChild?.lastChild).toHaveClass(
      'CheckboxIconWrapper--hover'
    );
  });

  it('should fireEvent onMouseLeave', () => {
    const { container, getByTestId } = render(<Checkbox />);

    fireEvent.mouseEnter(getByTestId('input'), { target: { value: '1' } });
    fireEvent.mouseLeave(getByTestId('input'), { target: { value: '1' } });

    expect(container.firstChild?.firstChild?.lastChild).not.toHaveClass(
      'CheckboxIconWrapper--hover'
    );
  });

  it('should focus on the input during click on label', () => {
    const { container } = render(
      <Checkbox classNameLabel="test" label="label" />
    );
    fireEvent.click(document.getElementsByClassName('test')[0]);

    expect(container.firstChild?.firstChild?.firstChild).toBeChecked();
  });

  it('should focus on the input during click on label with passed ref', () => {
    const { container } = render(
      <Checkbox classNameLabel="test" label="label" ref={{ current: null }} />
    );
    fireEvent.click(document.getElementsByClassName('test')[0]);

    expect(container.firstChild?.firstChild?.firstChild).toBeChecked();
  });

  it('should not has disabled attribute', () => {
    const { container } = render(<Checkbox />);

    expect(container.firstChild?.firstChild?.firstChild).not.toHaveAttribute(
      'disabled'
    );
  });

  it('should has disabled attribute', () => {
    const { container } = render(<Checkbox disabled />);

    expect(container.firstChild?.firstChild?.firstChild).toHaveAttribute(
      'disabled'
    );
  });

  it('should has error message', () => {
    const { container } = render(<Checkbox errorMessage="Test" />);

    expect(container?.firstChild?.lastChild).toHaveTextContent('Test');
  });

  it('should render pulseEffect after click', async () => {
    const { getByTestId } = render(<Checkbox />);

    fireEvent.click(getByTestId('input'));
    await waitFor(
      () => {
        expect(getByTestId('input')?.nextSibling?.lastChild).toHaveClass(
          'CirclePulse'
        );
      },
      { timeout: 100 }
    );
  });

  it('should not render pulseEffect after click', async () => {
    const { getByTestId } = render(<Checkbox disabledPulseEffect />);

    fireEvent.click(getByTestId('input'));
    await waitFor(
      () => {
        expect(getByTestId('input')?.nextSibling?.lastChild).toHaveClass(
          'CheckboxIconWrapper__checked-icon'
        );
      },
      { timeout: 100 }
    );
  });

  it('should has forced focus', () => {
    const { container } = render(<Checkbox forcedFocus />);

    expect(container.firstChild?.firstChild?.childNodes[1]).toHaveClass(
      'CheckboxIconWrapper--focus'
    );
  });

  it('should has forced hover', () => {
    const { container } = render(<Checkbox forcedHover />);

    expect(container.firstChild?.firstChild?.childNodes[1]).toHaveClass(
      'CheckboxIconWrapper--hover'
    );
  });

  it('should display proper label', () => {
    const { container } = render(<Checkbox label="Label" />);

    expect(container.firstChild?.firstChild?.lastChild).toHaveTextContent(
      'Label'
    );
  });

  it('should be default margin', () => {
    const { container } = render(<Checkbox />);

    expect(container.firstChild).toHaveClass('Checkbox--margin-bottom');
  });

  it('should be passed margin', () => {
    const { container } = render(<Checkbox margin={Margin.marginTopBottom} />);

    expect(container.firstChild).toHaveClass('Checkbox--margin-top-bottom');
  });

  it('should fire onChange event', () => {
    const { getByTestId } = render(<Checkbox onChange={mockCallBack} />);
    const checkbox = getByTestId('input');

    fireEvent.click(checkbox);
    expect(mockCallBack?.mock.calls.length).toBe(1);
  });

  it('should fire setCheckedGroup event', () => {
    const { getByTestId } = render(
      <Checkbox index={10} setValueGroup={mockCallBack} />
    );
    const checkbox = getByTestId('input');

    fireEvent.click(checkbox);
    expect(mockCallBack).toHaveBeenCalledWith(true, 10);
  });

  it('should has medium size', () => {
    const { container } = render(<Checkbox />);

    expect(container.firstChild?.firstChild?.firstChild).toHaveClass(
      'CheckboxInput--medium'
    );
    expect(container.firstChild?.firstChild?.childNodes[1]).toHaveClass(
      'CheckboxIconWrapper--medium'
    );
  });

  it('should has large size', () => {
    const { container } = render(<Checkbox size={Size.large} />);

    expect(container.firstChild?.firstChild?.firstChild).toHaveClass(
      'CheckboxInput--large'
    );
    expect(container.firstChild?.firstChild?.childNodes[1]).toHaveClass(
      'CheckboxIconWrapper--large'
    );
  });

  it('should has custom styles', () => {
    const { container } = render(<Checkbox style={{ width: '100%' }} />);

    expect(container.firstChild).toHaveAttribute('style');
  });

  it('should render unchecked icon', () => {
    const { container } = render(<Checkbox />);

    expect(
      container.firstChild?.firstChild?.childNodes[1].firstChild
    ).toHaveClass('CheckboxIconWrapper__unchecked-icon');
  });
});
