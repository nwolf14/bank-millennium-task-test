import { ComponentStory, ComponentMeta } from '@storybook/react';

// components
import TextField from '../TextField';
import StoryComponent from '../../../../../stories/components/StoryComponent/StoryComponent';

// others
import { ContentGridFlow } from '../../../../../stories/components/StoryComponent/enums';
import { textFieldFormProps } from '../../../../../stories/constants';
import { TStoryBlockCode } from '../../../../../stories/components/StoryBlockCode/types';

const description = [
  `Standard form attributes are supported e.g. <code>required</code>, <code>disabled</code>, <code>type</code>, etc. as well as a <code>helperText</code> which is used to give context about a field's input, such as how the input will be used.`,
];

const blockCodeData: TStoryBlockCode = {
  componentName: 'TextField',
  props: [
    {
      attributes: [{ name: 'label', value: 'Required' }, { name: 'required' }],
      children: '',
    },
    {
      attributes: [
        { name: 'defaultValue', value: 'Disabled' },
        { name: 'disabled' },
        { name: 'label', value: 'Disabled' },
      ],
      children: '',
    },
    {
      attributes: [
        { name: 'defaultValue', value: 'Password' },
        { name: 'label', value: 'Disabled' },
        { name: 'type', value: 'password' },
      ],
      children: '',
    },
    {
      attributes: [
        { name: 'defaultValue', value: 'Read Only' },
        { name: 'label', value: 'Read Only' },
        { name: 'readOnly' },
      ],
      children: '',
    },
    {
      attributes: [
        { name: 'label', value: 'Number' },
        { name: 'type', value: 'number' },
      ],
      children: '',
    },
    {
      attributes: [
        { name: 'label', value: 'Search field' },
        { name: 'type', value: 'search' },
      ],
      children: '',
    },
    {
      attributes: [
        { name: 'helperText', value: 'Helper Text' },
        { name: 'label', value: 'Helper Text' },
      ],
      children: '',
    },
  ],
  imports: [
    {
      items: 'TextField',
      path: './shared/ComponentsUI/components/TextField/TextField',
    },
  ],
};

export default {
  component: TextField,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/hVsmArh0s8VYibYYBtChnY/Components---UI?node-id=592%3A17',
    },
  },
  title: textFieldFormProps,
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => (
  <StoryComponent
    blockCodeData={blockCodeData}
    contentGridFlow={ContentGridFlow.maxThreeColumns}
    description={description}
    title="Text Field Form Props"
  >
    <TextField {...args} label="Required" required />
    <TextField {...args} defaultValue="Disabled" disabled label="Disabled" />
    <TextField
      {...args}
      label="Password"
      defaultValue="Password"
      type="password"
    />
    <TextField {...args} defaultValue="Read Only" label="Read Only" readOnly />
    <TextField {...args} label="Number" type="number" />
    <TextField {...args} label="Search field" type="search" />
    <TextField {...args} helperText="Helper text" label="Helper text" />
  </StoryComponent>
);

export const TextFieldFormProps = Template.bind({});

TextFieldFormProps.argTypes = {
  defaultValue: {
    table: {
      disable: true,
    },
  },
  disabled: {
    table: {
      disable: true,
    },
  },
  forcedFocus: {
    table: {
      disable: true,
    },
  },
  forcedHover: {
    table: {
      disable: true,
    },
  },
  helperText: {
    table: {
      disable: true,
    },
  },
  label: {
    table: {
      disable: true,
    },
  },
  readOnly: {
    table: {
      disable: true,
    },
  },
  required: {
    table: {
      disable: true,
    },
  },
  type: {
    table: {
      disable: true,
    },
  },
};

TextFieldFormProps.args = {};
