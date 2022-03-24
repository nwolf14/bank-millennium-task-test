import { fireEvent, render } from '@testing-library/react';

// components
import Switch from './Switch';

// others
import { Margin } from '../../enums';
import { Size } from './enums';

describe('Switch', () => {
  const mockCallBack = jest.fn();

  it('should be unchecked', () => {
    const { container } = render(<Switch />);
    expect(
      container.firstChild?.firstChild?.lastChild?.firstChild
    ).not.toBeChecked();
  });

  it('should append class', () => {
    const { container } = render(<Switch className="test" />);

    expect(container.firstChild).toHaveClass('test');
  });

  it('should append class to handler', () => {
    const { container } = render(<Switch classNameHandler="test" />);

    expect(container.firstChild?.firstChild?.lastChild?.lastChild).toHaveClass(
      'test'
    );
  });

  it('should append class to input', () => {
    const { container } = render(<Switch classNameInput="test" />);

    expect(container.firstChild?.firstChild?.lastChild?.firstChild).toHaveClass(
      'test'
    );
  });

  it('should append class to label', () => {
    const { container } = render(<Switch classNameLabel="test" />);

    expect(container.firstChild?.firstChild?.firstChild).toHaveClass('test');
  });

  it('should be checked after click on label', () => {
    const { container } = render(<Switch classNameLabel="test" />);

    fireEvent.click(document.getElementsByClassName('test')[0]);

    expect(
      container.firstChild?.firstChild?.lastChild?.firstChild
    ).toBeChecked();
  });

  it('should has default value', () => {
    const { container } = render(<Switch defaultValue />);

    expect(
      container.firstChild?.firstChild?.lastChild?.firstChild
    ).toBeChecked();
  });

  it('should be disabled', () => {
    const { container } = render(<Switch disabled />);

    expect(
      container.firstChild?.firstChild?.lastChild?.firstChild
    ).toHaveAttribute('disabled');
  });

  it('should has error message', () => {
    const { container } = render(<Switch errorMessage="error" />);

    expect(container.firstChild?.lastChild?.lastChild).toHaveTextContent(
      'error.svgerror'
    );
  });

  it('should has proper label', () => {
    const { container } = render(<Switch label="label" />);

    expect(container.firstChild?.firstChild?.firstChild).toHaveTextContent(
      'label'
    );
  });

  it('should be default margin', () => {
    const { container } = render(<Switch label="label" />);

    expect(container.firstChild).toHaveClass('Switch--margin-bottom');
  });

  it('should be top margin', () => {
    const { container } = render(
      <Switch label="label" margin={Margin.marginTop} />
    );

    expect(container.firstChild).toHaveClass('Switch--margin-top');
  });

  it('should fire onChange event', () => {
    const { getByTestId } = render(<Switch onChange={mockCallBack} />);
    const checkbox = getByTestId('input');

    fireEvent.click(checkbox);
    expect(mockCallBack?.mock.calls.length).toBe(1);
  });

  it('should has medium size', () => {
    const { container } = render(<Switch />);

    expect(container.firstChild?.firstChild?.lastChild).toHaveClass(
      'Switch__input-wrapper--medium'
    );

    expect(container.firstChild?.firstChild?.lastChild?.lastChild).toHaveClass(
      'SwitchHandler--medium'
    );
  });

  it('should has small size', () => {
    const { container } = render(<Switch size={Size.small} />);

    expect(container.firstChild?.firstChild?.lastChild).toHaveClass(
      'Switch__input-wrapper--small'
    );

    expect(container.firstChild?.firstChild?.lastChild?.lastChild).toHaveClass(
      'SwitchHandler--small'
    );
  });

  it('should has custom styles', () => {
    const { container } = render(<Switch style={{ width: '100%' }} />);

    expect(container.firstChild).toHaveAttribute('style');
  });

  it('should has controlled value', () => {
    const { container } = render(<Switch value />);

    expect(
      container.firstChild?.firstChild?.lastChild?.firstChild
    ).toBeChecked();
  });
});
