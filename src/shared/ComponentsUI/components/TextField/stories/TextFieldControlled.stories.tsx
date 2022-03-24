import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';

// components
import TextField from '../TextField';
import StoryComponent from '../../../../../stories/components/StoryComponent/StoryComponent';

// others
import { textFieldControlled } from '../../../../../stories/constants';
import { TStoryBlockCode } from '../../../../../stories/components/StoryBlockCode/types';

const description = [
  'You can control the textfield with the <code>value</code> and <code>onChange</code> props:',
];

const blockCodeData: TStoryBlockCode = {
  componentName: 'TextField',
  props: [
    {
      attributes: [
        { name: 'label', value: 'Full Width' },
        {
          name: 'onChange',
          value: `{setValue}`,
        },
        { name: 'value', value: '{value}' },
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
  title: textFieldControlled,
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => {
  const [value, setValue] = useState('');

  return (
    <StoryComponent
      blockCodeData={blockCodeData}
      description={description}
      title="Text Field Controlled"
    >
      <TextField
        {...args}
        label="Controlled"
        onChange={(value) => setValue(value as string)}
        value={value}
      />
    </StoryComponent>
  );
};

export const TextFieldControlled = Template.bind({});

TextFieldControlled.argTypes = {
  label: {
    table: {
      disable: true,
    },
  },
  value: {
    table: {
      disable: true,
    },
  },
};

TextFieldControlled.args = {};
