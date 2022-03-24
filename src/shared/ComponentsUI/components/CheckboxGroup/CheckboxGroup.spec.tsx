import { fireEvent, render, waitFor } from '@testing-library/react';

// components
import Checkbox from '../Checkbox/Checkbox';
import CheckboxGroup from './CheckboxGroup';

// others
import { Size } from '../Checkbox/enums';
import { Margin } from '../../enums';

jest.mock('lodash', () => ({
  ...(jest.requireActual('lodash') as Object),
  defer: (callback: any) => callback(),
}));

jest.mock('react-svg', () => ({
  ReactSVG: (props: any) => <input {...props} />,
}));

describe('Checkbox', () => {
  const mockCallBack = jest.fn();

  it('should be unchecked in every checkbox', () => {
    const { container } = render(
      <CheckboxGroup>
        <Checkbox />
        <Checkbox />
        <Checkbox />
      </CheckboxGroup>
    );

    expect(
      container.firstChild?.firstChild?.firstChild?.firstChild
    ).not.toBeChecked();

    for (let i = 0; i < 3; i++) {
      expect(
        container.firstChild?.childNodes[1].childNodes[i].firstChild
      ).not.toBeChecked();
    }
  });

  it('should be checked in every checkbox', () => {
    const { container } = render(
      <CheckboxGroup valueGroup={[true, true, true]}>
        <Checkbox />
        <Checkbox />
        <Checkbox />
      </CheckboxGroup>
    );

    expect(
      container?.firstChild?.firstChild?.firstChild?.firstChild
    ).toBeChecked();

    for (let i = 0; i < 3; i++) {
      expect(
        container.firstChild?.childNodes[1].childNodes[i].firstChild?.firstChild
      ).toBeChecked();
    }
  });

  it('should not be checked child if Parent is unchecked', () => {
    const { container } = render(
      <CheckboxGroup>
        <Checkbox defaultValue />
        <Checkbox />
        <Checkbox />
      </CheckboxGroup>
    );

    expect(
      container.firstChild?.firstChild?.firstChild?.firstChild
    ).not.toBeChecked();

    for (let i = 1; i < 3; i++) {
      expect(
        container.firstChild?.childNodes[1].childNodes[i].firstChild
      ).not.toBeChecked();
    }
  });

  it('should render checked icon', () => {
    const { container } = render(
      <CheckboxGroup defaultValueGroup={[true, true, true]}>
        <Checkbox />
        <Checkbox />
        <Checkbox />
      </CheckboxGroup>
    );

    expect(
      container.firstChild?.firstChild?.firstChild?.childNodes[1].firstChild
    ).toHaveClass('CheckboxIconWrapper__checked-icon');

    for (let i = 0; i < 3; i++) {
      expect(
        container.firstChild?.childNodes[1].childNodes[i].firstChild
          ?.childNodes[1].firstChild
      ).toHaveClass('CheckboxIconWrapper__checked-icon');
    }
  });

  it('should append class', () => {
    const { container } = render(
      <CheckboxGroup className="test">
        <Checkbox />
        <Checkbox />
        <Checkbox />
      </CheckboxGroup>
    );

    expect(container.firstChild).toHaveClass('test');
  });

  it('should append class icon wrapper', () => {
    const { container } = render(
      <CheckboxGroup classNameIconWrapper="test">
        <Checkbox />
        <Checkbox />
        <Checkbox />
      </CheckboxGroup>
    );

    for (let i = 0; i < 3; i++) {
      expect(
        container.firstChild?.lastChild?.childNodes[i].firstChild?.lastChild
      ).toHaveClass('test');
    }
  });

  it('should append class input', () => {
    const { container } = render(
      <CheckboxGroup classNameInput="test">
        <Checkbox />
        <Checkbox />
        <Checkbox />
      </CheckboxGroup>
    );

    for (let i = 0; i < 3; i++) {
      expect(
        container.firstChild?.lastChild?.childNodes[i].firstChild?.firstChild
      ).toHaveClass('test');
    }
  });

  it('should append class label', () => {
    const { container } = render(
      <CheckboxGroup classNameLabel="test">
        <Checkbox label="label" />
        <Checkbox label="label" />
        <Checkbox label="label" />
      </CheckboxGroup>
    );

    for (let i = 0; i < 3; i++) {
      expect(
        container.firstChild?.lastChild?.childNodes[i].firstChild?.lastChild
      ).toHaveClass('test');
    }
  });

  it('should click the first checkbox', () => {
    const { container } = render(
      <CheckboxGroup classNameLabel="test">
        <Checkbox label="label" />
        <Checkbox label="label" />
        <Checkbox label="label" />
      </CheckboxGroup>
    );

    fireEvent.click(document.getElementsByClassName('test')[0]);

    expect(
      container.firstChild?.lastChild?.childNodes[0].firstChild?.firstChild
    ).toBeChecked();
  });

  it('should not has disabled attribute in every checkbox', () => {
    const { container } = render(
      <CheckboxGroup>
        <Checkbox />
        <Checkbox />
        <Checkbox />
      </CheckboxGroup>
    );

    expect(
      container.firstChild?.firstChild?.firstChild?.firstChild
    ).not.toHaveAttribute('disabled');

    for (let i = 0; i < 3; i++) {
      expect(
        container.firstChild?.childNodes[1].childNodes[i].firstChild?.firstChild
      ).not.toHaveAttribute('disabled');
    }
  });

  it('should has disabled attribute in every checkbox', () => {
    const { container } = render(
      <CheckboxGroup disabled>
        <Checkbox />
        <Checkbox />
        <Checkbox />
      </CheckboxGroup>
    );

    expect(
      container.firstChild?.firstChild?.firstChild?.firstChild
    ).toHaveAttribute('disabled');

    for (let i = 0; i < 3; i++) {
      expect(
        container.firstChild?.childNodes[1].childNodes[i].firstChild?.firstChild
      ).toHaveAttribute('disabled');
    }
  });

  it('should render pulseEffect after click on every checkbox', async () => {
    const { getAllByTestId } = render(
      <CheckboxGroup>
        <Checkbox />
        <Checkbox />
        <Checkbox />
      </CheckboxGroup>
    );

    for (let i = 0; i < 4; i++) {
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
      <CheckboxGroup disabledPulseEffect>
        <Checkbox />
        <Checkbox />
        <Checkbox />
      </CheckboxGroup>
    );

    for (let i = 0; i < 4; i++) {
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
      <CheckboxGroup forcedFocus>
        <Checkbox />
        <Checkbox />
        <Checkbox />
      </CheckboxGroup>
    );

    expect(
      container.firstChild?.firstChild?.firstChild?.childNodes[1]
    ).toHaveClass('CheckboxIconWrapper--focus');

    for (let i = 0; i < 3; i++) {
      expect(
        container.firstChild?.childNodes[1].childNodes[i].firstChild
          ?.childNodes[1]
      ).toHaveClass('CheckboxIconWrapper--focus');
    }
  });

  it('should has forced hover', () => {
    const { container } = render(
      <CheckboxGroup forcedHover>
        <Checkbox />
        <Checkbox />
        <Checkbox />
      </CheckboxGroup>
    );

    expect(
      container.firstChild?.firstChild?.firstChild?.childNodes[1]
    ).toHaveClass('CheckboxIconWrapper--hover');

    for (let i = 0; i < 3; i++) {
      expect(
        container.firstChild?.childNodes[1].childNodes[i].firstChild
          ?.childNodes[1]
      ).toHaveClass('CheckboxIconWrapper--hover');
    }
  });

  it('should display proper labels', () => {
    const { container } = render(
      <CheckboxGroup label="Parent">
        <Checkbox label="Child_1" />
        <Checkbox label="Child_2" />
        <Checkbox label="Child_3" />
      </CheckboxGroup>
    );

    expect(
      container.firstChild?.firstChild?.firstChild?.lastChild
    ).toHaveTextContent('Parent');

    for (let i = 0; i < 3; i++) {
      expect(
        container.firstChild?.childNodes[1].childNodes[i].firstChild?.lastChild
      ).toHaveTextContent(`Child_${i + 1}`);
    }
  });

  it('should be default margin', () => {
    const { container } = render(
      <CheckboxGroup>
        <Checkbox />
        <Checkbox />
        <Checkbox />
      </CheckboxGroup>
    );

    expect(container.firstChild).toHaveClass('CheckboxGroup--margin-bottom');
  });

  it('should be passed margin', () => {
    const { container } = render(
      <CheckboxGroup margin={Margin.marginTopBottom}>
        <Checkbox />
        <Checkbox />
        <Checkbox />
      </CheckboxGroup>
    );

    expect(container.firstChild).toHaveClass(
      'CheckboxGroup--margin-top-bottom'
    );
  });

  it('should double fire onChange event', () => {
    const { getAllByTestId } = render(
      <CheckboxGroup onChange={mockCallBack}>
        <Checkbox />
        <Checkbox />
        <Checkbox />
      </CheckboxGroup>
    );
    const checkbox = getAllByTestId('input')[0];

    fireEvent.click(checkbox);
    fireEvent.click(checkbox);

    expect(mockCallBack.mock.calls.length).toBe(8);
  });

  it('should has medium size in every checkbox', () => {
    const { container } = render(
      <CheckboxGroup>
        <Checkbox />
        <Checkbox />
        <Checkbox />
      </CheckboxGroup>
    );

    expect(
      container.firstChild?.firstChild?.firstChild?.firstChild
    ).toHaveClass('CheckboxInput--medium');

    for (let i = 0; i < 3; i++) {
      expect(
        container.firstChild?.childNodes[1].childNodes[i].firstChild?.firstChild
      ).toHaveClass('CheckboxInput--medium');
    }
  });

  it('should has large size in every checkbox', () => {
    const { container } = render(
      <CheckboxGroup size={Size.large}>
        <Checkbox />
        <Checkbox />
        <Checkbox />
      </CheckboxGroup>
    );

    expect(
      container.firstChild?.firstChild?.firstChild?.firstChild
    ).toHaveClass('CheckboxInput--large');

    for (let i = 0; i < 3; i++) {
      expect(
        container.firstChild?.childNodes[1].childNodes[i].firstChild?.firstChild
      ).toHaveClass('CheckboxInput--large');
    }
  });

  it('should has custom styles', () => {
    const { container } = render(
      <CheckboxGroup style={{ width: '100%' }}>
        <Checkbox />
        <Checkbox />
        <Checkbox />
      </CheckboxGroup>
    );

    expect(container.firstChild).toHaveAttribute('style');
  });

  it('should render unchecked icon', () => {
    const { container } = render(
      <CheckboxGroup>
        <Checkbox />
        <Checkbox />
        <Checkbox />
      </CheckboxGroup>
    );

    expect(
      container.firstChild?.firstChild?.firstChild?.childNodes[1].firstChild
    ).toHaveClass('CheckboxIconWrapper__unchecked-icon');

    for (let i = 0; i < 3; i++) {
      expect(
        container.firstChild?.childNodes[1].childNodes[i].firstChild
          ?.childNodes[1].firstChild
      ).toHaveClass('CheckboxIconWrapper__unchecked-icon');
    }
  });
});
