import { ComponentStory, ComponentMeta } from '@storybook/react';

// components
import Checkbox from '../Checkbox';
import StoryApi from '../../../../../stories/components/StoryApi/StoryApi';

// others
import { checkboxAPI } from '../../../../../stories/constants';
import { TStoryBlockCode } from '../../../../../stories/components/StoryBlockCode/types';
import { TTableBody } from '../../../../../stories/components/StoryPropsTable/types';

const description = [
  'API documentation for the React Checkbox component. Learn about the available props.',
];

const tableBodyData: Array<TTableBody> = [
  {
    name: 'checkedIcon',
    type: 'string',
    description: 'The icon to display when the component is checked.',
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
    name: 'index',
    type: 'number',
    description:
      'Index is provided by <code>CheckboxGroup</code> to update proper flag in state as array.',
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
    name: 'meta',
    type: 'TMetaProps',
    description: 'Props provided by redux-hook-form.',
  },
  {
    name: 'onChange',
    type: '(checked: boolean) => void',
    description:
      '<code>Function</code> to call action after the click checkbox.',
  },
  {
    name: 'setCheckedGroup',
    type: '(checked: boolean; index: number) => void',
    description:
      'Function which is provided by <code>CheckboxGroup</code> to update state in this component.',
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
    description: 'If true, the component is <code>checked</code>.',
  },
];

const blockCodeData: TStoryBlockCode = {
  imports: [
    {
      items: 'Checkbox',
      path: './shared/ComponentsUI/components/Checkbox/Checkbox',
    },
  ],
};

export default {
  component: Checkbox,
  title: checkboxAPI,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = () => (
  <StoryApi
    blockCodeData={blockCodeData}
    description={description}
    tableBodyData={tableBodyData}
    title="Checkbox API"
  />
);

export const CheckboxAPI = Template.bind({});
