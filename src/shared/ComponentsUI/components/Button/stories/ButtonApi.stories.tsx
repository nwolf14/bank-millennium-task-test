import { ComponentStory, ComponentMeta } from '@storybook/react';

// components
import Button from '../Button';
import StoryApi from '../../../../../stories/components/StoryApi/StoryApi';

// others
import { buttonAPI } from '../../../../../stories/constants';
import { TStoryBlockCode } from '../../../../../stories/components/StoryBlockCode/types';
import { TTableBody } from '../../../../../stories/components/StoryPropsTable/types';

const description = [
  'API documentation for the React Button component. Learn about the available props.',
];

const tableBodyData: Array<TTableBody> = [
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
    name: 'color',
    type: `'primary'<br/>|&nbsp;'primary'<br/>|&nbsp;'secondary'<br/>|&nbsp;'success'<br/>|&nbsp;'warning'<br/>|&nbsp;'error'<br/>|&nbsp;'string'`,
    defaultValue: `'primary'`,
    description: `The color of the component. It doesn't supports those theme colors that make sense for this component.`,
  },
  {
    name: 'disabled',
    type: 'boolean',
    defaultValue: 'false',
    description: 'If <code>true</code>, the component is disabled.',
  },
  {
    name: 'disableRippleEffect',
    type: 'boolean',
    defaultValue: 'false',
    description: 'If <code>true</code>, the ripple effect is disabled.',
  },
  {
    name: 'endIcon',
    type: 'node',
    description: 'Element placed after the children.',
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
      'If <code>true</code>, the button will take up the full width of its container.',
  },
  {
    name: 'onClick',
    type: '() => void',
    description: '<code>Function</code> to call action after the click button.',
  },
  {
    name: 'size',
    type: `'small'<br/>|&nbsp;'small'<br/>|&nbsp;'medium'<br/>|&nbsp;'large'<br/>|&nbsp;'string'`,
    defaultValue: `'medium'`,
    description:
      'The size of the component. <code>small</code> is equivalent to the dense button styling.',
  },
  {
    name: 'startIcon',
    type: 'node',
    description: 'Element placed before the children.',
  },
  {
    name: 'style',
    type: 'object',
    description: 'Override styles by object of styles.',
  },
  {
    name: 'type',
    type: `'button'<br/>|&nbsp;'button'<br/>|&nbsp;'reset'<br/>|&nbsp;'submit'<br/>|&nbsp;'string'`,
    description: 'Type of button.',
  },
  {
    name: 'variant',
    type: `text'<br/>|&nbsp;'text'<br/>|&nbsp;'contained'<br/>|&nbsp;'outlined'<br/>|&nbsp;'string'`,
    defaultValue: 'text',
    description: 'The variant to use.',
  },
];

const blockCodeData: TStoryBlockCode = {
  imports: [
    {
      items: 'Button',
      path: './shared/ComponentsUI/components/Button/Button',
    },
  ],
};

export default {
  component: Button,
  title: buttonAPI,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = () => (
  <StoryApi
    blockCodeData={blockCodeData}
    description={description}
    tableBodyData={tableBodyData}
    title="Button API"
  />
);

export const ButtonAPI = Template.bind({});
