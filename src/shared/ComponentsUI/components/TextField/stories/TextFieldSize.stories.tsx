import { ComponentStory, ComponentMeta } from '@storybook/react';

// components
import TextField from '../TextField';
import StoryComponent from '../../../../../stories/components/StoryComponent/StoryComponent';

// others
import {
  ContentAlignItems,
  ContentGridFlow,
} from '../../../../../stories/components/StoryComponent/enums';
import { textFieldSize } from '../../../../../stories/constants';
import { TStoryBlockCode } from '../../../../../stories/components/StoryBlockCode/types';
import { Size } from '../enums';

const description = ['Fancy smaller inputs? Use the <code>size</code> prop.'];

const blockCodeData: TStoryBlockCode = {
  componentName: 'TextField',
  props: [
    {
      attributes: [
        { name: 'label', value: 'Small' },
        { name: 'Size', value: 'Size.small' },
      ],
      children: '',
    },
    {
      attributes: [{ name: 'label', value: 'Small' }],
      children: '',
    },
    {
      attributes: [
        { name: 'label', value: 'Small - multiline' },
        { name: 'multiline' },
        { name: 'Size', value: 'Size.small' },
      ],
      children: '',
    },
    {
      attributes: [
        { name: 'label', value: 'Medium - multiline' },
        { name: 'multiline' },
      ],
      children: '',
    },
  ],
  imports: [
    {
      items: 'TextField',
      path: './shared/ComponentsUI/components/TextField/TextField',
    },
    {
      items: '{ Size }',
      path: './shared/ComponentsUI/components/TextField/enums',
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
  title: textFieldSize,
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => (
  <StoryComponent
    blockCodeData={blockCodeData}
    contentAlignItems={ContentAlignItems.top}
    contentGridFlow={ContentGridFlow.maxTwoColumns}
    description={description}
    title="Text Field Size"
  >
    <TextField label="Small" size={Size.small} {...args} />
    <TextField label="Medium" {...args} />
    <TextField
      label="Small - multiline"
      multiline
      size={Size.small}
      {...args}
    />
    <TextField label="Medium - multiline" multiline {...args} />
  </StoryComponent>
);

export const TextFieldSize = Template.bind({});

TextFieldSize.argTypes = {
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
  multiline: {
    table: {
      disable: true,
    },
  },
  size: {
    table: {
      disable: true,
    },
  },
};

TextFieldSize.args = {};
