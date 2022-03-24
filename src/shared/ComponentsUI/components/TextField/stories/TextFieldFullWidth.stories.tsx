import { ComponentStory, ComponentMeta } from '@storybook/react';

// components
import TextField from '../TextField';
import StoryComponent from '../../../../../stories/components/StoryComponent/StoryComponent';

// others
import { ContentDisplay } from '../../../../../stories/components/StoryComponent/enums';
import { Margin } from '../../../enums';
import { textFieldFullWidth } from '../../../../../stories/constants';
import { TStoryBlockCode } from '../../../../../stories/components/StoryBlockCode/types';

const description = [
  '<code>fullWidth</code> can be used to make the input take up the full width of its container.',
];

const blockCodeData: TStoryBlockCode = {
  componentName: 'TextField',
  props: [
    {
      attributes: [
        { name: 'fullWidth' },
        { name: 'label', value: 'Full Width' },
        { name: 'margin', value: 'Margin.none' },
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
  title: textFieldFullWidth,
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => (
  <StoryComponent
    blockCodeData={blockCodeData}
    contentDisplay={ContentDisplay.flex}
    description={description}
    title="Text Field Full Width"
  >
    <TextField
      fullWidth
      label="Full Width"
      margin={Margin.marginNone}
      {...args}
    />
  </StoryComponent>
);

export const TextFieldFullWidth = Template.bind({});

TextFieldFullWidth.argTypes = {
  fullWidth: {
    table: {
      disable: true,
    },
  },
  label: {
    table: {
      disable: true,
    },
  },
  margin: {
    table: {
      disable: true,
    },
  },
};

TextFieldFullWidth.args = {};
