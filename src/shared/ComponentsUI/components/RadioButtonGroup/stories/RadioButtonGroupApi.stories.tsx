import { ComponentStory, ComponentMeta } from '@storybook/react';

// components
import RadioButtonGroup from '../RadioButtonGroup';
import StoryApi from '../../../../../stories/components/StoryApi/StoryApi';
import StoryBlockWarning from '../../../../../stories/components/StoryBlockWarning/StoryBlockWarning';

// others
import { radioButtonGroupAPI } from '../../../../../stories/constants';
import { TStoryBlockCode } from '../../../../../stories/components/StoryBlockCode/types';
import { TTableBody } from '../../../../../stories/components/StoryPropsTable/types';

const description = [
  'API documentation for the React RadioButtonGroup component. Learn about the available props.',
];

const tableBodyData: Array<TTableBody> = [
  {
    name: 'children',
    type: 'noe',
    description: 'The content of the component.',
  },
  {
    name: 'className',
    type: 'string',
    description: 'Override or extend the styles applied to the component.',
  },
  {
    name: 'classNameCircleWrapper',
    type: 'string',
    description: 'Override or extend the styles applied to the Circle Wrapper.',
  },
  {
    name: 'classNameInput',
    type: 'string',
    description: 'Override or extend the styles applied to the Input.',
  },
  {
    name: 'classNameLabel',
    type: 'string',
    description: 'Override or extend the styles applied to the Label.',
  },
  {
    name: 'defaultValue',
    type: 'string',
    description: 'The default value. Use when the component is not controlled.',
  },
  {
    name: 'disabled',
    type: 'boolean',
    defaultValue: 'false',
    description: 'If <code>true</code>, the component is disabled.',
  },
  {
    name: 'disabledPulseEffect',
    type: 'boolean',
    defaultValue: 'false',
    description: 'If <code>true</code>, the pulse effect is disabled.',
  },
  {
    name: 'errorMessage',
    type: 'string',
    description:
      'Provide error message for <code>ValidationMessage</code> component.',
  },
  {
    name: 'forcedFocus',
    type: 'boolean',
    defaultValue: 'false',
    description:
      'If <code>true</code>, the focus will be active without user friction.',
  },
  {
    name: 'forcedHover',
    type: 'boolean',
    defaultValue: 'false',
    description:
      'If <code>true</code>, the hover will be active without user friction.',
  },
  {
    name: 'label',
    type: 'string',
    description:
      'Intended to describe a particular element associated with a form.',
  },
  {
    name: 'onChange',
    type: '(value: string) => void',
    description:
      '<code>Function</code> to call action after the click some radio button.',
  },
  {
    name: 'margin',
    type: `'margin-bottom'<br/>|&nbsp;'margin-top'<br/>|&nbsp;'margin-bottom'<br/>|&nbsp;'margin-top-bottom'<br/>|&nbsp;'margin-none'<br/>|&nbsp;'string'`,
    defaultValue: 'margin-bottom',
    description: 'It adjusts vertical spacing around <code>input</code>',
  },
  {
    name: 'name',
    type: 'string',
    description: `The name used to reference the value of the control.`,
  },
  {
    name: 'size',
    type: `'small'<br/>|&nbsp;'small'<br/>|&nbsp;'medium'<br/>|&nbsp;'large'<br/>|&nbsp;'string'`,
    defaultValue: `'medium'`,
    description:
      'The size of the component. <code>small</code> is equivalent to the dense button styling.',
  },
  {
    name: 'style',
    type: 'object',
    description: 'Override styles by object of styles.',
  },
  {
    name: 'value',
    type: 'string',
    description:
      'Value of the selected radio button. The DOM API casts this to a string.',
  },
];

const blockCodeData: TStoryBlockCode = {
  imports: [
    {
      items: 'RadioButtonGroup',
      path: './shared/ComponentsUI/components/RadioButtonGroup/RadioButtonGroup',
    },
  ],
};

export default {
  component: RadioButtonGroup,
  title: radioButtonGroupAPI,
} as ComponentMeta<typeof RadioButtonGroup>;

const Template: ComponentStory<typeof RadioButtonGroup> = () => (
  <StoryApi
    blockCodeData={blockCodeData}
    description={description}
    tableBodyData={tableBodyData}
    title="RadioButtonGroup API"
  >
    <StoryBlockWarning>
      When you pass RadioButton to RadioButtonGroup, RadioButtonGroup pass some
      of props to RadioButton to control them & pass common props. If you use
      some custom wrapper, as main children for RadioButtonGroup, you can do,
      but every RadioButton as children for wrapper can be passed single.
      <br />
      <br />
      For Example:
      <br />
      {`<RadioButtonGroup label="Parent" name="radioButton">`}
      <br />
      &nbsp;&nbsp;&nbsp;{`<Component>`}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      {`<RadioButton label="Child 1" value="0" />`}
      <br />
      &nbsp;&nbsp;&nbsp;{`</Component>`}
      <br />
      &nbsp;&nbsp;&nbsp;{`<Component>`}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      {`<RadioButton label="Child 2" value="1" />`}
      <br />
      &nbsp;&nbsp;&nbsp;{`</Component>`}
      <br />
      &nbsp;&nbsp;&nbsp;{`<Component>`}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      {`<RadioButton label="Child 3" value="2" />`}
      <br />
      &nbsp;&nbsp;&nbsp;{`</Component>`}
      <br />
      {`</RadioButtonGroup>`}
      <br />
      <br />
      {`const Component = ({ children, ...restProps }) => {`}
      <br />
      &nbsp;&nbsp;&nbsp;{`return <>{cloneElement(children, restProps)}</>;`}
      <br />
      {`}`};
    </StoryBlockWarning>
  </StoryApi>
);

export const RadioButtonGroupAPI = Template.bind({});
