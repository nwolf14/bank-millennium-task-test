import { ComponentStory, ComponentMeta } from '@storybook/react';

// components
import CheckboxGroup from '../CheckboxGroup';
import StoryApi from '../../../../../stories/components/StoryApi/StoryApi';
import StoryBlockWarning from '../../../../../stories/components/StoryBlockWarning/StoryBlockWarning';

// others
import { checkboxGroupAPI } from '../../../../../stories/constants';
import { TStoryBlockCode } from '../../../../../stories/components/StoryBlockCode/types';
import { TTableBody } from '../../../../../stories/components/StoryPropsTable/types';

const description = [
  'API documentation for the React CheckboxGroup component. Learn about the available props.',
];

const tableBodyData: Array<TTableBody> = [
  {
    name: 'checkedIcon',
    type: 'string',
    description: 'The icon to display when the component is checked.',
  },
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
    name: 'classNameIconWrapper',
    type: 'string',
    description: 'Override or extend the styles applied to the Icon Wrapper.',
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
    type: 'boolean',
    defaultValue: 'false',
    description:
      'The default value state. Use when the component is not controlled.',
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
    name: 'indeterminateIcon',
    type: 'string',
    description: 'The icon to display when the some of checkbox is checked.',
  },
  {
    name: 'label',
    type: 'string',
    description:
      'Intended to describe a particular element associated with a form.',
  },
  {
    name: 'margin',
    type: `'margin-bottom'<br/>|&nbsp;'margin-top'<br/>|&nbsp;'margin-bottom'<br/>|&nbsp;'margin-top-bottom'<br/>|&nbsp;'margin-none'<br/>|&nbsp;'string'`,
    defaultValue: 'margin-bottom',
    description: 'It adjusts vertical spacing around <code>input</code>',
  },
  {
    name: 'onChange',
    type: '(checked: boolean) => void',
    description:
      '<code>Function</code> to call action after the click parent checkbox.',
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
    name: 'uncheckedIcon',
    type: 'string',
    description: 'The icon to display when the component is unchecked.',
  },
  {
    name: 'value',
    type: 'bool',
    defaultValue: 'false',
    description: 'If true, the parent checkbox is <code>checked</code>.',
  },
];

const blockCodeData: TStoryBlockCode = {
  imports: [
    {
      items: 'CheckboxGroup',
      path: './shared/ComponentsUI/components/CheckboxGroup/CheckboxGroup',
    },
  ],
};

export default {
  component: CheckboxGroup,
  title: checkboxGroupAPI,
} as ComponentMeta<typeof CheckboxGroup>;

const Template: ComponentStory<typeof CheckboxGroup> = () => (
  <StoryApi
    blockCodeData={blockCodeData}
    description={description}
    tableBodyData={tableBodyData}
    title="Checkbox Group API"
  >
    <StoryBlockWarning>
      When you pass Checkbox to CheckboxGroup, CheckboxGroup pass some of props
      to Checkbox to control them & pass common props. If you use some custom
      wrapper, as main children for CheckboxGroup, you can do, but every
      Checkbox as children for wrapper can be passed single.
      <br />
      <br />
      For Example:
      <br />
      {`<CheckboxGroup label="Parent">`}
      <br />
      &nbsp;&nbsp;&nbsp;{`<Component>`}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<Checkbox label="Child 1" />`}
      <br />
      &nbsp;&nbsp;&nbsp;{`</Component>`}
      <br />
      &nbsp;&nbsp;&nbsp;{`<Component>`}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<Checkbox label="Child 2" />`}
      <br />
      &nbsp;&nbsp;&nbsp;{`</Component>`}
      <br />
      &nbsp;&nbsp;&nbsp;{`<Component>`}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<Checkbox label="Child 3" />`}
      <br />
      &nbsp;&nbsp;&nbsp;{`</Component>`}
      <br />
      {`</CheckboxGroup>`}
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

export const CheckboxGroupAPI = Template.bind({});
