import React from 'react';
import { fireEvent, render } from '@testing-library/react';

// components
import TextField from './TextField';

// others
import { Margin } from '../../enums';
import { Size } from './enums';

jest.mock('react-svg', () => ({
  ReactSVG: (props: any) => <input {...props} />,
}));

describe('TextField', () => {
  const mockCallBack = jest.fn();

  beforeAll(() => {
    mockCallBack.mockClear();
  });

  it('should be focused', () => {
    const { container } = render(<TextField autoFocus />);

    expect(container.firstChild?.firstChild?.firstChild).toHaveFocus();
  });

  it('should append class', () => {
    const { container } = render(<TextField className="test" />);

    expect(container.firstChild).toHaveClass('test');
  });

  it('should append class for filling', () => {
    const { container } = render(<TextField classNameFilling="test" />);

    expect(container.firstChild?.firstChild?.lastChild).toHaveClass('test');
  });

  it('should append class for input', () => {
    const { container } = render(<TextField classNameInput="test" />);

    expect(container.firstChild?.firstChild?.firstChild).toHaveClass('test');
  });

  it('should append class for label', () => {
    const { container } = render(<TextField classNameLabel="test" />);

    expect(container.firstChild?.firstChild?.childNodes[1]).toHaveClass('test');
  });

  it('should append class for input wrapper', () => {
    const { container } = render(<TextField classNameWrapper="test" />);

    expect(container.firstChild?.firstChild).toHaveClass('test');
  });

  it('should has default value', () => {
    const { container } = render(<TextField defaultValue="test" />);

    expect(container.firstChild?.firstChild?.firstChild).toHaveValue('test');
  });

  it('should has disabled attribute', () => {
    const { container } = render(<TextField disabled />);

    expect(container.firstChild?.firstChild?.firstChild).toHaveAttribute(
      'disabled'
    );
  });

  it('should has endAdornment element', () => {
    const { container } = render(<TextField endAdornment={<p>Test</p>} />);

    expect(container.firstChild?.firstChild?.lastChild).toHaveTextContent(
      'Test'
    );
  });

  it('should has error message', () => {
    const { container } = render(<TextField errorMessage="Test" />);

    expect(container.firstChild?.lastChild?.firstChild).toHaveTextContent(
      'Test'
    );
  });

  it('should has forced focus', () => {
    const { container } = render(<TextField forcedFocus />);

    expect(container.firstChild?.firstChild?.childNodes[1]).toHaveClass(
      'TextFieldLabel--focus'
    );
    expect(container.firstChild?.firstChild?.childNodes[2]).toHaveClass(
      'TextFieldFilling--focus'
    );
  });

  it('should has forced hover', () => {
    const { container } = render(<TextField forcedHover />);

    expect(container.firstChild?.firstChild?.childNodes[2]).toHaveClass(
      'TextFieldFilling--hover'
    );
  });

  it('should has fullWidth', () => {
    const { container } = render(<TextField fullWidth />);

    expect(container.firstChild).toHaveClass('TextField--full-width');
  });

  it('should has helper message', () => {
    const { container } = render(<TextField helperText="Test" />);

    expect(container.firstChild?.lastChild?.firstChild).toHaveTextContent(
      'Test'
    );
  });

  it('should hide helper message when error is passed', () => {
    const { container } = render(
      <TextField errorMessage="error" helperText="helperText" />
    );

    expect(container.firstChild?.lastChild?.firstChild).not.toHaveTextContent(
      'helperText'
    );
    expect(container.firstChild?.lastChild?.firstChild).toHaveTextContent(
      'error'
    );
  });

  it('should pass correct id', () => {
    const { container } = render(<TextField id="test" />);

    expect(container.firstChild?.firstChild?.firstChild).toHaveAttribute(
      'id',
      'test'
    );
  });

  it('should pass default value', () => {
    const { container } = render(<TextField defaultValue="0" />);

    expect(container.firstChild?.firstChild?.firstChild).toHaveValue('0');
  });

  it('should pass correct label', () => {
    const { container } = render(<TextField label="test" />);

    expect(container.firstChild?.firstChild?.childNodes[1]).toHaveTextContent(
      'test'
    );
  });

  it('should change position label when value is passed', () => {
    const { container } = render(<TextField defaultValue="0" label="test" />);

    expect(container.firstChild?.firstChild?.childNodes[1]).toHaveClass(
      'TextFieldLabel--placement-top'
    );
  });

  it('should be default margin', () => {
    const { container } = render(<TextField />);

    expect(container.firstChild).toHaveClass('TextField--margin-bottom');
  });

  it('should be passed margin', () => {
    const { container } = render(<TextField margin={Margin.marginTopBottom} />);

    expect(container.firstChild).toHaveClass('TextField--margin-top-bottom');
  });

  it('should be correct height when text contains bigger amount lines than maxRows', () => {
    const { container } = render(
      <TextField
        defaultValue="Line 1&#10;Line 2"
        maxRows={2}
        minRows={1}
        multiline
      />
    );

    expect(container.firstChild?.firstChild?.firstChild).toHaveAttribute(
      'style',
      'height: 48px;'
    );
  });

  it('should be correct height when minSizes is passed', () => {
    const { container } = render(
      <TextField maxRows={2} minRows={2} multiline />
    );

    expect(container.firstChild?.firstChild?.firstChild).toHaveAttribute(
      'style',
      'height: 48px;'
    );
  });

  it('should be textarea render instead of input', () => {
    const { container } = render(
      <TextField maxRows={2} minRows={2} multiline />
    );

    expect(container.querySelector('textarea')).not.toBeNull();
  });

  it('should passed correct name', () => {
    const { container } = render(<TextField name="test" />);

    expect(container.firstChild?.firstChild?.firstChild).toHaveAttribute(
      'name',
      'test'
    );
  });

  it('should has placeholder', () => {
    const { container } = render(<TextField placeholder="test" />);

    expect(container.firstChild?.firstChild?.firstChild).toHaveAttribute(
      'placeholder',
      'test'
    );
  });

  it('should fire focus on input after click on input wrapper', () => {
    const { container } = render(<TextField classNameWrapper="test" />);
    fireEvent.click(document.getElementsByClassName('test')[0]);

    expect(container.firstChild?.firstChild?.firstChild).toHaveFocus();
  });

  it('should fire focus on input after click on input wrapper with passed ref', () => {
    const ref = { current: {} };
    const { container } = render(
      <TextField ref={ref as any} classNameWrapper="test" />
    );
    fireEvent.click(document.getElementsByClassName('test')[0]);

    expect(container.firstChild?.firstChild?.firstChild).toHaveFocus();
  });

  it('should fire onMouseEnter', () => {
    const ref = { current: {} };
    const { container } = render(
      <TextField ref={ref as any} classNameWrapper="test" />
    );
    fireEvent.mouseEnter(document.getElementsByClassName('test')[0]);

    expect(container.firstChild?.firstChild?.childNodes[2]).toHaveClass(
      'TextFieldFilling--hover'
    );
  });

  it('should fire onMouseLeave', () => {
    const ref = { current: {} };
    const { container } = render(
      <TextField ref={ref as any} classNameWrapper="test" />
    );
    fireEvent.mouseEnter(document.getElementsByClassName('test')[0]);
    fireEvent.mouseLeave(document.getElementsByClassName('test')[0]);

    expect(container.firstChild?.firstChild?.childNodes[2]).not.toHaveClass(
      'TextFieldFilling--hover'
    );
  });

  it('should fire onBlur event', () => {
    const { getByTestId } = render(<TextField onBlur={mockCallBack} />);
    const input = getByTestId('input');

    fireEvent.blur(input, { target: { value: '' } });
    expect(mockCallBack.mock.calls.length).toBe(1);
  });

  it('should fire onChange event', () => {
    const { getByTestId } = render(<TextField onChange={mockCallBack} />);
    const input = getByTestId('input');

    fireEvent.change(input, { target: { value: '1' } });
    expect(mockCallBack.mock.calls.length).toBe(1);
  });

  it('should fire onChange event on multiline', () => {
    const { getByTestId } = render(
      <TextField multiline onChange={mockCallBack} />
    );
    const input = getByTestId('input');

    fireEvent.change(input, { target: { value: '1' } });
    expect(mockCallBack.mock.calls.length).toBe(1);
  });

  it('should fire onChange event on multiline', () => {
    const { getByTestId } = render(
      <TextField maxRows={1} minRows={1} multiline onChange={mockCallBack} />
    );
    const input = getByTestId('input');

    fireEvent.change(input, { target: { value: '1' } });
    expect(mockCallBack.mock.calls.length).toBe(1);
  });

  it('should fire onFocus event', () => {
    const { getByTestId } = render(<TextField onFocus={mockCallBack} />);
    const input = getByTestId('input');

    fireEvent.focus(input, { target: { value: '' } });
    expect(mockCallBack.mock.calls.length).toBe(1);
  });

  it('should be read only', () => {
    const { container } = render(<TextField readOnly />);

    expect(container.firstChild?.firstChild?.firstChild).toHaveAttribute(
      'readOnly'
    );
  });

  it('should render asterisk', () => {
    const { container } = render(<TextField label="label" required />);

    expect(container.firstChild?.firstChild?.childNodes[1]).toHaveTextContent(
      'label *'
    );
  });

  it('should has startAdornment element', () => {
    const { container } = render(<TextField startAdornment={<p>Test</p>} />);

    expect(container.firstChild?.firstChild?.firstChild).toHaveTextContent(
      'Test'
    );
  });

  it('should has default size', () => {
    const { container } = render(<TextField />);

    expect(container.firstChild?.firstChild).toHaveClass(
      'TextFieldInputWrapper--medium'
    );
  });

  it('should has small size', () => {
    const { container } = render(<TextField size={Size.small} />);

    expect(container.firstChild?.firstChild).toHaveClass(
      'TextFieldInputWrapper--small'
    );
  });

  it('should has custom styles', () => {
    const { container } = render(<TextField style={{ width: '100%' }} />);

    expect(container.firstChild).toHaveAttribute('style');
  });

  it('should pass type', () => {
    const { container } = render(<TextField type="number" />);

    expect(container.firstChild?.firstChild?.firstChild).toHaveAttribute(
      'type',
      'number'
    );
  });
});
