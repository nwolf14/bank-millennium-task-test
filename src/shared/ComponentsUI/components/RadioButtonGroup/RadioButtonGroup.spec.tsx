import { cloneElement, FC } from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';

// components
import RadioButton from '../RadioButton/RadioButton';
import RadioButtonGroup from './RadioButtonGroup';

// others
import { Margin } from '../../enums';
import { Size } from '../Checkbox/enums';

jest.mock('react-svg', () => ({
  ReactSVG: (props: any) => <input {...props} />,
}));

describe('Checkbox', () => {
  const mockCallBack = jest.fn();

  it('should be unchecked in every radio button', () => {
    const { container } = render(
      <RadioButtonGroup name="Name">
        <RadioButton value="0" />
        <RadioButton value="1" />
        <RadioButton value="2" />
      </RadioButtonGroup>
    );

    for (let i = 0; i < 3; i++) {
      expect(container.firstChild?.childNodes[i].firstChild).not.toBeChecked();
    }
  });

  it('one of radio button should be checked', () => {
    const { container } = render(
      <RadioButtonGroup defaultValue="0" name="Name">
        <RadioButton value="0" />
        <RadioButton value="1" />
        <RadioButton value="2" />
      </RadioButtonGroup>
    );
    expect(container.firstChild?.childNodes[0].firstChild).toBeChecked();
  });

  it('one of radio button should be checked when radiobuttons are wrraped', () => {
    const Wrapper: FC<any> = ({ children, ...restProps }) => {
      return <>{cloneElement(children, restProps)}</>;
    };

    const { container } = render(
      <RadioButtonGroup defaultValue="0" name="Name">
        <Wrapper>
          <RadioButton value="0" />
        </Wrapper>
        <Wrapper>
          <RadioButton value="1" />
        </Wrapper>
        <Wrapper>
          <RadioButton value="2" />
        </Wrapper>
      </RadioButtonGroup>
    );
    expect(container.firstChild?.childNodes[0].firstChild).toBeChecked();
  });

  it('should append class', () => {
    const { container } = render(
      <RadioButtonGroup className="test" name="Name">
        <RadioButton value="0" />
        <RadioButton value="1" />
        <RadioButton value="2" />
      </RadioButtonGroup>
    );

    expect(container.firstChild).toHaveClass('test');
  });

  it('should append class circle wrapper', () => {
    const { container } = render(
      <RadioButtonGroup classNameCircleWrapper="test">
        <RadioButton value="0" />
        <RadioButton value="1" />
        <RadioButton value="2" />
      </RadioButtonGroup>
    );

    for (let i = 0; i < 3; i++) {
      expect(container.firstChild?.childNodes[i]?.childNodes[1]).toHaveClass(
        'test'
      );
    }
  });

  it('should append class input', () => {
    const { container } = render(
      <RadioButtonGroup classNameInput="test">
        <RadioButton value="0" />
        <RadioButton value="1" />
        <RadioButton value="2" />
      </RadioButtonGroup>
    );

    for (let i = 0; i < 3; i++) {
      expect(container.firstChild?.childNodes[i]?.firstChild).toHaveClass(
        'test'
      );
    }
  });

  it('should append class label', () => {
    const { container } = render(
      <RadioButtonGroup classNameLabel="test">
        <RadioButton label="Label" value="0" />
        <RadioButton label="Label" value="1" />
        <RadioButton label="Label" value="2" />
      </RadioButtonGroup>
    );

    for (let i = 0; i < 3; i++) {
      expect(container.firstChild?.childNodes[i].lastChild).toHaveClass('test');
    }
  });

  it('should not has disabled attribute in every radio button', () => {
    const { container } = render(
      <RadioButtonGroup name="Name">
        <RadioButton value="0" />
        <RadioButton value="1" />
        <RadioButton value="2" />
      </RadioButtonGroup>
    );

    for (let i = 0; i < 3; i++) {
      expect(
        container.firstChild?.childNodes[i].firstChild
      ).not.toHaveAttribute('disabled');
    }
  });

  it('should has disabled attribute in every radio button', () => {
    const { container } = render(
      <RadioButtonGroup disabled name="Name">
        <RadioButton value="0" />
        <RadioButton value="1" />
        <RadioButton value="2" />
      </RadioButtonGroup>
    );

    for (let i = 0; i < 3; i++) {
      expect(container.firstChild?.childNodes[i].firstChild).toHaveAttribute(
        'disabled'
      );
    }
  });

  it('should has error message', () => {
    const { container } = render(
      <RadioButtonGroup errorMessage="Test" name="Name">
        <RadioButton value="0" />
        <RadioButton value="1" />
        <RadioButton value="2" />
      </RadioButtonGroup>
    );

    expect(container.firstChild?.lastChild?.firstChild).toHaveTextContent(
      'Test'
    );
  });

  it('should be default margin', () => {
    const { container } = render(
      <RadioButtonGroup name="Name">
        <RadioButton value="0" />
        <RadioButton value="1" />
        <RadioButton value="2" />
      </RadioButtonGroup>
    );

    expect(container.firstChild).toHaveClass('RadioButtonGroup--margin-bottom');
  });

  it('should be passed margin', () => {
    const { container } = render(
      <RadioButtonGroup margin={Margin.marginTopBottom} name="Name">
        <RadioButton value="0" />
        <RadioButton value="1" />
        <RadioButton value="2" />
      </RadioButtonGroup>
    );

    expect(container.firstChild).toHaveClass(
      'RadioButtonGroup--margin-top-bottom'
    );
  });

  it('should render pulseEffect after click on every radio button', async () => {
    const { getAllByTestId } = render(
      <RadioButtonGroup name="Name">
        <RadioButton value="0" />
        <RadioButton value="1" />
        <RadioButton value="2" />
      </RadioButtonGroup>
    );

    for (let i = 0; i < 3; i++) {
      fireEvent.click(getAllByTestId('input')[i]);
      await waitFor(
        () => {
          expect(getAllByTestId('input')[i].nextSibling?.lastChild).toHaveClass(
            'CirclePulse'
          );
        },
        { timeout: 100 }
      );
    }
  });

  it('should not render pulseEffect after click on every checkbox', async () => {
    const { getAllByTestId } = render(
      <RadioButtonGroup disabledPulseEffect name="Name">
        <RadioButton value="0" />
        <RadioButton value="1" />
        <RadioButton value="2" />
      </RadioButtonGroup>
    );

    for (let i = 0; i < 3; i++) {
      fireEvent.click(getAllByTestId('input')[i]);
      await waitFor(
        () => {
          expect(
            getAllByTestId('input')[i].nextSibling?.lastChild
          ).not.toHaveClass('CirclePulse');
        },
        { timeout: 100 }
      );
    }
  });

  it('should has forced focus', () => {
    const { container } = render(
      <RadioButtonGroup forcedFocus name="Name">
        <RadioButton value="0" />
        <RadioButton value="1" />
        <RadioButton value="2" />
      </RadioButtonGroup>
    );

    for (let i = 0; i < 3; i++) {
      expect(container.firstChild?.childNodes[i].childNodes[1]).toHaveClass(
        'RadioButtonCircleWrapper--focus'
      );
    }
  });

  it('should has forced hover', () => {
    const { container } = render(
      <RadioButtonGroup forcedHover name="Name">
        <RadioButton value="0" />
        <RadioButton value="1" />
        <RadioButton value="2" />
      </RadioButtonGroup>
    );

    for (let i = 0; i < 3; i++) {
      expect(container.firstChild?.childNodes[i].childNodes[1]).toHaveClass(
        'RadioButtonCircleWrapper--hover'
      );
    }
  });

  it('should display proper labels', () => {
    const { container } = render(
      <RadioButtonGroup label="Parent" name="Name">
        <RadioButton label="Child_1" value="0" />
        <RadioButton label="Child_2" value="1" />
        <RadioButton label="Child_3" value="2" />
      </RadioButtonGroup>
    );
    expect(container.firstChild?.firstChild?.lastChild).toHaveTextContent(
      'Parent'
    );

    for (let i = 0; i < 3; i++) {
      expect(
        container.firstChild?.childNodes[i + 1].lastChild
      ).toHaveTextContent(`Child_${i + 1}`);
    }
  });

  it('should fire onChange event', () => {
    const { getAllByTestId } = render(
      <RadioButtonGroup onChange={mockCallBack} name="Name">
        <RadioButton value="0" />
        <RadioButton value="1" />
        <RadioButton value="2" />
      </RadioButtonGroup>
    );
    const checkbox = getAllByTestId('input')[0];

    fireEvent.click(checkbox);
    expect(mockCallBack.mock.calls.length).toBe(1);
  });

  it('should has medium size in every checkbox', () => {
    const { container } = render(
      <RadioButtonGroup name="Name">
        <RadioButton value="0" />
        <RadioButton value="1" />
        <RadioButton value="2" />
      </RadioButtonGroup>
    );

    for (let i = 0; i < 3; i++) {
      expect(container.firstChild?.childNodes[i].firstChild).toHaveClass(
        'RadioButtonInput--medium'
      );
    }
  });

  it('should has large size in every checkbox', () => {
    const { container } = render(
      <RadioButtonGroup name="Name" size={Size.large}>
        <RadioButton value="0" />
        <RadioButton value="1" />
        <RadioButton value="2" />
      </RadioButtonGroup>
    );

    for (let i = 0; i < 3; i++) {
      expect(container.firstChild?.childNodes[i].firstChild).toHaveClass(
        'RadioButtonInput--large'
      );
    }
  });

  it('should has custom styles', () => {
    const { container } = render(
      <RadioButtonGroup name="Name" style={{ width: '100%' }}>
        <RadioButton value="0" />
        <RadioButton value="1" />
        <RadioButton value="2" />
      </RadioButtonGroup>
    );

    expect(container.firstChild).toHaveAttribute('style');
  });
});
