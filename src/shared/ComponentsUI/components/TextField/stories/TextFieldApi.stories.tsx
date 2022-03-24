import { ComponentStory, ComponentMeta } from '@storybook/react';

// components
import TextField from '../TextField';
import StoryApi from '../../../../../stories/components/StoryApi/StoryApi';

// others
import { textFieldAPI } from '../../../../../stories/constants';
import { TStoryBlockCode } from '../../../../../stories/components/StoryBlockCode/types';
import { TTableBody } from '../../../../../stories/components/StoryPropsTable/types';

const description = [
  'API documentation for the React TextField component. Learn about the available props.',
];

const tableBodyData: Array<TTableBody> = [
  {
    name: 'autoFocus',
    type: 'bool',
    defaultValue: 'false',
    description:
      'If <code>true</code>, the <code>input</code> element is focused during the first mount.',
  },
  {
    name: 'className',
    type: 'string',
    description: 'Override or extend the styles applied to the component.',
  },
  {
    name: 'classNameFilling',
    type: 'string',
    description: 'Override or extend the styles applied to the filing.',
  },
  {
    name: 'classNameInput',
    type: 'string',
    description: 'Override or extend the styles applied to the input.',
  },
  {
    name: 'classNameLabel',
    type: 'string',
    description: 'Override or extend the styles applied to the label.',
  },
  {
    name: 'classNameWrapper',
    type: 'string',
    description: 'Override or extend the styles applied to the input wrapper.',
  },
  {
    name: 'defaultValue',
    type: 'number | string',
    description: 'The default value. Use when the component is not controlled.',
  },
  {
    name: 'disabled',
    type: 'boolean',
    defaultValue: 'false',
    description: 'If <code>true</code>, the component is disabled.',
  },
  {
    name: 'endAdornment',
    type: 'node',
    description: 'Trailing adornment at the beginning of component.',
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
    name: 'fullWidth',
    type: 'boolean',
    defaultValue: 'false',
    description:
      'If <code>true</code>, the input will take up the full width of its container.',
  },
  {
    name: 'helperText',
    type: 'string',
    description: 'The helper text content.',
  },
  {
    name: 'id',
    type: 'string',
    description:
      'The id of the <code>input</code> element. Use this prop to make <code>label</code> and <code>helperText</code> accessible for screen readers.',
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
    name: 'maxRows',
    type: 'number',
    defaultValue: '0',
    description:
      'Maximum number of rows to display when multiline option is set to true.',
  },
  {
    name: 'minRows',
    type: 'number',
    defaultValue: '0',
    description:
      'Minimum number of rows to display when multiline option is set to true.',
  },
  {
    name: 'multiline',
    type: 'bool',
    defaultValue: 'false',
    description:
      'If <code>true</code>, a <code>textarea</code> element is rendered instead of an <code>input</code>.',
  },
  {
    name: 'name',
    type: 'string',
    description: 'Name attribute of the <code>input</code> element.',
  },
  {
    name: 'onChange',
    type: '(value: number | string) => void',
    description: '<code>Function</code> to call action after the change value',
  },
  {
    name: 'placeholder',
    type: 'string',
    description:
      'The short hint displayed in the <code>input</code> before the user enters a value.',
  },
  {
    name: 'readOnly',
    type: 'bool',
    defaultValue: 'false',
    description: 'If <code>true</code>, the component is read only.',
  },
  {
    name: 'required',
    type: 'bool',
    defaultValue: 'false',
    description:
      'If <code>true</code>, the label is displayed as required and the <code>input</code> element is required.',
  },
  {
    name: 'startAdornment',
    type: 'node',
    description: 'Trailing adornment at the end of component.',
  },
  {
    name: 'size',
    type: `'small'<br/>|&nbsp;'small'<br/>|&nbsp;'medium'<br/>|&nbsp;'string'`,
    defaultValue: `'medium'`,
    description: 'The size of the component. <code>small</code>.',
  },
  {
    name: 'style',
    type: 'object',
    description: 'Override styles by object of styles.',
  },
  {
    name: 'type',
    type: 'React.HTMLInputTypeAttribute',
    description:
      'Type of the <code>input</code> element. It should be a valid HTML5 input type.',
  },
  {
    name: 'value',
    type: 'number | string',
    description:
      'The value of the <code>input</code> element, required for a controlled component.',
  },
];

const blockCodeData: TStoryBlockCode = {
  imports: [
    {
      items: 'TextField',
      path: './shared/ComponentsUI/components/TextField/TextField',
    },
  ],
};

export default {
  component: TextField,
  title: textFieldAPI,
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = () => (
  <StoryApi
    blockCodeData={blockCodeData}
    description={description}
    tableBodyData={tableBodyData}
    title="TextField API"
  />
);

export const TextFieldAPI = Template.bind({});
