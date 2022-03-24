import { ComponentStory, ComponentMeta } from '@storybook/react';

// components
import RadioButton from '../RadioButton';
import StoryApi from '../../../../../stories/components/StoryApi/StoryApi';

// others
import { radioButtonAPI } from '../../../../../stories/constants';
import { TStoryBlockCode } from '../../../../../stories/components/StoryBlockCode/types';
import { TTableBody } from '../../../../../stories/components/StoryPropsTable/types';

const description = [
  'API documentation for the React RadioButton component. Learn about the available props.',
];

const tableBodyData: Array<TTableBody> = [
  {
    name: 'checked',
    type: 'string',
    description: 'If <code>true</code>, the component is checked.',
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
    name: 'name',
    type: 'string',
    description: 'Name attribute of the <code>input</code> element.',
  },
  {
    name: 'onChange',
    type: '(value: string) => void',
    description:
      '<code>Function</code> to call action after the click radio button.',
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
      'The value of the component. The DOM API casts this to a string.',
  },
];

const blockCodeData: TStoryBlockCode = {
  imports: [
    {
      items: 'RadioButton',
      path: './shared/ComponentsUI/components/RadioButton/RadioButton',
    },
  ],
};

export default {
  component: RadioButton,
  title: radioButtonAPI,
} as ComponentMeta<typeof RadioButton>;

const Template: ComponentStory<typeof RadioButton> = () => (
  <StoryApi
    blockCodeData={blockCodeData}
    description={description}
    tableBodyData={tableBodyData}
    title="Radio Button API"
  />
);

export const RadioButtonAPI = Template.bind({});
