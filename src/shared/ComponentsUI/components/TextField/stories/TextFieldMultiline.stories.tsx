import { ComponentStory, ComponentMeta } from '@storybook/react';

// components
import TextField from '../TextField';
import StoryComponent from '../../../../../stories/components/StoryComponent/StoryComponent';

// others
import {
  ContentAlignItems,
  ContentGridFlow,
} from '../../../../../stories/components/StoryComponent/enums';
import { textFieldMultiline } from '../../../../../stories/constants';
import { TStoryBlockCode } from '../../../../../stories/components/StoryBlockCode/types';

const description = [
  'The <code>multiline</code> prop transforms the text field into a <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea" target="_blank"><code>&lt;textarea&gt;</code></a> element. Unless the rows prop is set, the height of the text field dynamically matches its content (using TextareaAutosize). You can use the <code>minRows</code> and <code>maxRows</code> props to bound it.',
];

const blockCodeData: TStoryBlockCode = {
  componentName: 'TextField',
  props: [
    {
      attributes: [{ name: 'label', value: 'Default' }, { name: 'multiline' }],
      children: '',
    },
    {
      attributes: [
        { name: 'label', value: 'Max rows 4' },
        { name: 'maxRows', value: '4' },
        { name: 'multiline' },
      ],
      children: '',
    },
    {
      attributes: [
        { name: 'label', value: 'Min 4 rows & max 8 rows' },
        { name: 'maxRows', value: '4' },
        { name: 'minRows', value: '8' },
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
  title: textFieldMultiline,
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => (
  <StoryComponent
    blockCodeData={blockCodeData}
    contentAlignItems={ContentAlignItems.top}
    contentGridFlow={ContentGridFlow.maxThreeColumns}
    description={description}
    title="Text Field Multiline"
  >
    <TextField label="Default" multiline {...args} />
    <TextField label="Max rows 4" maxRows={4} minRows={1} multiline {...args} />
    <TextField
      label="Min 4 rows & max 8 rows"
      maxRows={8}
      minRows={4}
      multiline
      {...args}
    />
  </StoryComponent>
);

export const TextFieldMultiline = Template.bind({});

TextFieldMultiline.argTypes = {
  label: {
    table: {
      disable: true,
    },
  },
  maxRows: {
    table: {
      disable: true,
    },
  },
  minRows: {
    table: {
      disable: true,
    },
  },
  multiline: {
    table: {
      disable: true,
    },
  },
};

TextFieldMultiline.args = {};
