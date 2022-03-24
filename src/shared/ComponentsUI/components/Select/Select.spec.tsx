import { fireEvent, render } from '@testing-library/react';

// components
import Select from './Select';
import SelectItem from './components/SelectItem/SelectItem';

// others
import { Margin } from '../../enums';
import { Size } from '../TextField/enums';

jest.mock('react-svg', () => ({
  ReactSVG: (props: any) => <input {...props} />,
}));

describe('Select', () => {
  const mockCallBack = jest.fn();

  it('should be focused', () => {
    const { container } = render(
      <Select autoFocus>
        <SelectItem value="1">1</SelectItem>
        <SelectItem value="2">1</SelectItem>
        <SelectItem value="3">1</SelectItem>
      </Select>
    );

    expect(
      container.firstChild?.firstChild?.firstChild?.firstChild
    ).toHaveFocus();
  });

  it('should render children', () => {
    const { container } = render(
      <Select>
        <SelectItem value="1">1</SelectItem>
        <SelectItem value="2">2</SelectItem>
        <SelectItem value="3">3</SelectItem>
      </Select>
    );

    for (let i = 0; i < 3; i++) {
      expect(
        container.firstChild?.lastChild?.firstChild?.childNodes[i]
      ).not.toBe(null);
    }
  });

  it('should append class', () => {
    const { container } = render(
      <Select className="test">
        <SelectItem value="1">1</SelectItem>
        <SelectItem value="2">2</SelectItem>
        <SelectItem value="3">3</SelectItem>
      </Select>
    );

    expect(container.firstChild).toHaveClass('test');
  });

  it('should append class for item', () => {
    const { container } = render(
      <Select classNameItem="test">
        <SelectItem value="1">1</SelectItem>
        <SelectItem value="2">2</SelectItem>
        <SelectItem value="3">3</SelectItem>
      </Select>
    );

    for (let i = 0; i < 3; i++) {
      expect(
        container.firstChild?.lastChild?.firstChild?.childNodes[i]
      ).toHaveClass('test');
    }
  });

  it('should append class for options', () => {
    const { container } = render(
      <Select classNameOptions="test">
        <SelectItem value="1">1</SelectItem>
        <SelectItem value="2">2</SelectItem>
        <SelectItem value="3">3</SelectItem>
      </Select>
    );

    expect(container.firstChild?.lastChild).toHaveClass('test');
  });

  it('should has default value', () => {
    const { container } = render(
      <Select defaultValue="1">
        <SelectItem value="1">1</SelectItem>
        <SelectItem value="2">2</SelectItem>
        <SelectItem value="3">3</SelectItem>
      </Select>
    );

    expect(
      container.firstChild?.firstChild?.firstChild?.firstChild
    ).toHaveValue('1');
  });

  it('should has disabled attribute', () => {
    const { container } = render(
      <Select disabled>
        <SelectItem value="1">1</SelectItem>
        <SelectItem value="2">2</SelectItem>
        <SelectItem value="3">3</SelectItem>
      </Select>
    );

    expect(
      container.firstChild?.firstChild?.firstChild?.firstChild
    ).toHaveAttribute('disabled');
  });

  it('should has error message', () => {
    const { container } = render(
      <Select errorMessage="Test">
        <SelectItem value="1">1</SelectItem>
        <SelectItem value="2">2</SelectItem>
        <SelectItem value="3">3</SelectItem>
      </Select>
    );

    expect(
      container.firstChild?.firstChild?.lastChild?.firstChild
    ).toHaveTextContent('Test');
  });

  it('should has forced hover', () => {
    const { container } = render(
      <Select forcedHover>
        <SelectItem value="1">1</SelectItem>
        <SelectItem value="2">2</SelectItem>
        <SelectItem value="3">3</SelectItem>
      </Select>
    );

    expect(
      container.firstChild?.firstChild?.firstChild?.childNodes[2]
    ).toHaveClass('TextFieldFilling--hover');
  });

  it('should has forced selected', () => {
    const { container } = render(
      <Select forcedSelected>
        <SelectItem value="1">1</SelectItem>
        <SelectItem value="2">2</SelectItem>
        <SelectItem value="3">3</SelectItem>
      </Select>
    );

    expect(container.firstChild?.lastChild).toHaveClass(
      'SelectOptions--selected'
    );
  });

  it('should be fullwidth', () => {
    const { container } = render(
      <Select fullWidth>
        <SelectItem value="1">1</SelectItem>
        <SelectItem value="2">2</SelectItem>
        <SelectItem value="3">3</SelectItem>
      </Select>
    );

    expect(container.firstChild?.firstChild).toHaveClass(
      'TextField--full-width'
    );
  });

  it('should has helper text', () => {
    const { container } = render(
      <Select helperText="helperText">
        <SelectItem value="1">1</SelectItem>
        <SelectItem value="2">2</SelectItem>
        <SelectItem value="3">3</SelectItem>
      </Select>
    );

    expect(
      container.firstChild?.firstChild?.lastChild?.firstChild
    ).toHaveTextContent('helperText');
  });

  it('should pass correct id', () => {
    const { container } = render(
      <Select id="test">
        <SelectItem value="1">1</SelectItem>
        <SelectItem value="2">2</SelectItem>
        <SelectItem value="3">3</SelectItem>
      </Select>
    );

    expect(
      container.firstChild?.firstChild?.firstChild?.firstChild
    ).toHaveAttribute('id', 'test');
  });

  it('should pass correct label', () => {
    const { container } = render(
      <Select label="test">
        <SelectItem value="1">1</SelectItem>
        <SelectItem value="2">2</SelectItem>
        <SelectItem value="3">3</SelectItem>
      </Select>
    );

    expect(
      container.firstChild?.firstChild?.firstChild?.childNodes[1]
    ).toHaveTextContent('test');
  });

  it('should be passed margin', () => {
    const { container } = render(
      <Select margin={Margin.marginTopBottom}>
        <SelectItem value="1">1</SelectItem>
        <SelectItem value="2">2</SelectItem>
        <SelectItem value="3">3</SelectItem>
      </Select>
    );

    expect(container.firstChild).toHaveClass('Select--margin-top-bottom');
  });

  it('should has arrary of value when multiple', () => {
    const { container } = render(
      <Select defaultValue={['1', '2', '3']} multiple>
        <SelectItem value="1">1</SelectItem>
        <SelectItem value="2">2</SelectItem>
        <SelectItem value="3">3</SelectItem>
      </Select>
    );

    expect(
      container.firstChild?.firstChild?.firstChild?.firstChild
    ).toHaveValue('1, 2, 3');
  });

  it('should passed correct name', () => {
    const { container } = render(
      <Select name="test">
        <SelectItem value="1">1</SelectItem>
        <SelectItem value="2">2</SelectItem>
        <SelectItem value="3">3</SelectItem>
      </Select>
    );

    expect(
      container.firstChild?.firstChild?.firstChild?.firstChild
    ).toHaveAttribute('name', 'test');
  });

  it('should has placeholder', () => {
    const { container } = render(
      <Select placeholder="test">
        <SelectItem value="1">1</SelectItem>
        <SelectItem value="2">2</SelectItem>
        <SelectItem value="3">3</SelectItem>
      </Select>
    );

    expect(
      container.firstChild?.firstChild?.firstChild?.firstChild
    ).toHaveAttribute('placeholder', 'test');
  });

  it('should fire onClick event on select', () => {
    const { getByTestId } = render(
      <Select onClick={mockCallBack}>
        <SelectItem value="1">1</SelectItem>
        <SelectItem value="2">2</SelectItem>
        <SelectItem value="3">3</SelectItem>
      </Select>
    );
    const select = getByTestId('select');

    fireEvent.click(select);
    expect(mockCallBack.mock.calls.length).toBe(1);
  });

  it('should fire onClick event on select & outside', () => {
    const { getByTestId, getByText } = render(
      <>
        {/* @ts-ignore */}
        <Select onBlur={mockCallBack}>
          <SelectItem value="1">1</SelectItem>
          <SelectItem value="2">2</SelectItem>
          <SelectItem value="3">3</SelectItem>
        </Select>
        <button>Click</button>
      </>
    );
    const select = getByTestId('select');
    const outsideButton = getByText('Click');

    fireEvent.click(select);
    fireEvent.mouseDown(outsideButton);

    expect(mockCallBack.mock.calls.length).toBe(1);
  });

  it('should fire onChange event on item', () => {
    const { getByTestId } = render(
      <Select onChange={mockCallBack}>
        <SelectItem value="1">1</SelectItem>
        <SelectItem value="2">2</SelectItem>
        <SelectItem value="3">3</SelectItem>
      </Select>
    );
    const selectItem = getByTestId('select-item-1');

    fireEvent.click(selectItem, '1');
    expect(mockCallBack.mock.calls.length).toBe(1);
  });

  it('should fire onChange event on items', () => {
    const { getByTestId } = render(
      <Select multiple onChange={mockCallBack}>
        <SelectItem value="1">1</SelectItem>
        <SelectItem value="2">2</SelectItem>
        <SelectItem value="3">3</SelectItem>
      </Select>
    );
    const selectItem1 = getByTestId('select-item-1');
    const selectItem2 = getByTestId('select-item-2');

    fireEvent.click(selectItem1, '1');
    fireEvent.click(selectItem2, '2');
    fireEvent.click(selectItem2, '1');
    expect(mockCallBack.mock.calls.length).toBe(3);
  });

  it('should be read only', () => {
    const { container } = render(
      <Select readOnly>
        <SelectItem value="1">1</SelectItem>
        <SelectItem value="2">2</SelectItem>
        <SelectItem value="3">3</SelectItem>
      </Select>
    );

    expect(
      container.firstChild?.firstChild?.firstChild?.firstChild
    ).toHaveAttribute('readOnly');
  });

  it('should render asterisk', () => {
    const { container } = render(
      <Select label="label" required>
        <SelectItem value="1">1</SelectItem>
        <SelectItem value="2">2</SelectItem>
        <SelectItem value="3">3</SelectItem>
      </Select>
    );

    expect(
      container.firstChild?.firstChild?.firstChild?.childNodes[1]
    ).toHaveTextContent('label *');
  });

  it('should has small size', () => {
    const { container } = render(
      <Select size={Size.small}>
        <SelectItem value="1">1</SelectItem>
        <SelectItem value="2">2</SelectItem>
        <SelectItem value="3">3</SelectItem>
      </Select>
    );

    expect(container.firstChild?.firstChild?.firstChild).toHaveClass(
      'TextFieldInputWrapper--small'
    );
  });

  it('should has custom styles', () => {
    const { container } = render(
      <Select style={{ width: '100%' }}>
        <SelectItem value="1">1</SelectItem>
        <SelectItem value="2">2</SelectItem>
        <SelectItem value="3">3</SelectItem>
      </Select>
    );

    expect(container.firstChild).toHaveAttribute('style');
  });
});
