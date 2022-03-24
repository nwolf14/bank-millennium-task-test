import { ComponentStory, ComponentMeta } from '@storybook/react';

// components
import Select from '../Select';
import StoryApi from '../../../../../stories/components/StoryApi/StoryApi';

// others
import { selectAPI } from '../../../../../stories/constants';
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
      'If <code>true</code>, the <code>select</code> element is focused during the first mount.',
  },
  {
    name: 'children',
    type: 'node',
    description: 'The content of the component.',
  },
  {
    name: 'className',
    type: 'string',
    description: 'Override or extend the styles applied to the component.',
  },
  {
    name: 'classNameOptions',
    type: 'string',
    description: 'Override or extend the styles applied to the Options.',
  },
  {
    name: 'classNameItem',
    type: 'string',
    description: 'Override or extend the styles applied to the Item.',
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
    name: 'errorMessage',
    type: 'string',
    description:
      'Provide error message for <code>ValidationMessage</code> component.',
  },
  {
    name: 'forcedHover',
    type: 'boolean',
    defaultValue: 'false',
    description:
      'If <code>true</code>, the hover will be active without user friction.',
  },
  {
    name: 'forcedSelected',
    type: 'boolean',
    defaultValue: 'false',
    description:
      'If <code>true</code>, the selected will be active without user friction.',
  },
  {
    name: 'fullWidth',
    type: 'boolean',
    defaultValue: 'false',
    description:
      'If <code>true</code>, the select will take up the full width of its container.',
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
      'The id of the <code>select</code> element. Use this prop to make <code>label</code> and <code>helperText</code> accessible for screen readers.',
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
    name: 'multiple',
    type: 'bool',
    defaultValue: 'false',
    description:
      'If <code>true, value must be an array and the menu will support multiple selections.',
  },
  {
    name: 'name',
    type: 'string',
    description: 'Name attribute of the <code>input</code> element.',
  },
  {
    name: 'onChange',
    type: '(value: string | Array<string>) => void',
    description:
      '<code>Function</code> to call action after the change value in select.',
  },
  {
    name: 'onClick',
    type: '() => void',
    description: '<code>Function</code> to call action after the click select.',
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
    type: 'string | Array<string>',
    description:
      'The value of the <code>input</code> element, required for a controlled component.',
  },
];

const blockCodeData: TStoryBlockCode = {
  imports: [
    {
      items: 'Select',
      path: './shared/ComponentsUI/components/Select/Select',
    },
  ],
};

export default {
  component: Select,
  title: selectAPI,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = () => (
  <StoryApi
    blockCodeData={blockCodeData}
    description={description}
    tableBodyData={tableBodyData}
    title="Select API"
  />
);

export const SelectAPI = Template.bind({});
