import { ComponentStory, ComponentMeta } from '@storybook/react';

// components
import StoryApi from '../../../../../stories/components/StoryApi/StoryApi';
import Switch from '../Switch';

// others
import { switchAPI } from '../../../../../stories/constants';
import { TStoryBlockCode } from '../../../../../stories/components/StoryBlockCode/types';
import { TTableBody } from '../../../../../stories/components/StoryPropsTable/types';

const description = [
  'API documentation for the React Switch component. Learn about the available props.',
];

const tableBodyData: Array<TTableBody> = [
  {
    name: 'className',
    type: 'string',
    description: 'Override or extend the styles applied to the component.',
  },
  {
    name: 'classNameHandler',
    type: 'string',
    description: 'Override or extend the styles applied to the Handler.',
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
    name: 'errorMessage',
    type: 'string',
    description:
      'Provide error message for <code>ValidationMessage</code> component.',
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
    description: '<code>Function</code> to call action after the click switch.',
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
    type: 'bool',
    defaultValue: 'false',
    description: 'If true, the component is <code>checked</code>.',
  },
];

const blockCodeData: TStoryBlockCode = {
  imports: [
    {
      items: 'Switch',
      path: './shared/ComponentsUI/components/Switch/Switch',
    },
  ],
};

export default {
  component: Switch,
  title: switchAPI,
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = () => (
  <StoryApi
    blockCodeData={blockCodeData}
    description={description}
    tableBodyData={tableBodyData}
    title="Switch API"
  />
);

export const SwitchAPI = Template.bind({});
