import { ComponentStory, ComponentMeta } from '@storybook/react';

// components
import TextField from '../TextField';
import StoryComponent from '../../../../../stories/components/StoryComponent/StoryComponent';

// others
import { basicTextField } from '../../../../../stories/constants';
import { ContentGridFlow } from '../../../../../stories/components/StoryComponent/enums';
import { TStoryBlockCode } from '../../../../../stories/components/StoryBlockCode/types';

const description = [
  'The <code>TextField</code> wrapper component is a complete form control including a label, input, and help text.',
];

const blockCodeData: TStoryBlockCode = {
  componentName: 'TextField',
  props: [
    {
      attributes: [{ name: 'label', value: 'Outlined' }],
      children: '',
    },
    {
      attributes: [
        { name: 'forcedHover' },
        { name: 'label', value: 'Outlined' },
      ],
      children: '',
    },
    {
      attributes: [
        { name: 'forcedFocus' },
        { name: 'label', value: 'Outlined' },
      ],
      children: '',
    },
    {
      attributes: [{ name: 'disabled' }, { name: 'label', value: 'Outlined' }],
      children: '',
    },
    {
      attributes: [
        { name: 'defaultValue', value: 'Outlined' },
        { name: 'label', value: 'Outlined' },
      ],
      children: '',
    },
    {
      attributes: [
        { name: 'defaultValue', value: 'Outlined' },
        { name: 'forcedHover' },
        { name: 'label', value: 'Outlined' },
      ],
      children: '',
    },
    {
      attributes: [
        { name: 'defaultValue', value: 'Outlined' },
        { name: 'forcedFocus' },
        { name: 'label', value: 'Outlined' },
      ],
      children: '',
    },
    {
      attributes: [
        { name: 'defaultValue', value: 'Outlined' },
        { name: 'disabled' },
        { name: 'label', value: 'Outlined' },
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
  title: basicTextField,
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => (
  <StoryComponent
    blockCodeData={blockCodeData}
    contentGridFlow={ContentGridFlow.maxFourColumns}
    description={description}
    title="Basic Text Field"
  >
    <TextField {...args} label="Outlined" />
    <TextField {...args} label="Outlined" forcedHover />
    <TextField {...args} label="Outlined" forcedFocus />
    <TextField {...args} disabled label="Outlined" />
    <TextField {...args} defaultValue="Outlined" label="Outlined" />
    <TextField {...args} defaultValue="Outlined" forcedHover label="Outlined" />
    <TextField {...args} defaultValue="Outlined" forcedFocus label="Outlined" />
    <TextField {...args} defaultValue="Outlined" disabled label="Outlined" />
  </StoryComponent>
);

export const BasicTextField = Template.bind({});

BasicTextField.argTypes = {
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
};

BasicTextField.args = {};
