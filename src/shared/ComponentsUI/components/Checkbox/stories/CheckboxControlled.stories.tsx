import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';

// components
import Checkbox from '../Checkbox';
import StoryComponent from '../../../../../stories/components/StoryComponent/StoryComponent';

// others
import { checkboxControlled } from '../../../../../stories/constants';
import { TStoryBlockCode } from '../../../../../stories/components/StoryBlockCode/types';

const description = [
  'You can control the checkbox with the <code>value</code> and <code>onChange</code> props.',
];

const blockCodeData: TStoryBlockCode = {
  componentName: 'Checkbox',
  props: [
    {
      attributes: [
        { name: 'value', value: '{value}' },
        {
          name: 'onChange',
          value: `{setValue}`,
        },
      ],
      children: '',
    },
  ],
  imports: [
    {
      items: 'Checkbox',
      path: './shared/ComponentsUI/components/Checkbox/Checkbox',
    },
  ],
};

export default {
  component: Checkbox,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/hVsmArh0s8VYibYYBtChnY/Components---UI?node-id=281%3A2',
    },
  },
  title: checkboxControlled,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => {
  const [value, setValue] = useState(false);

  return (
    <StoryComponent
      blockCodeData={blockCodeData}
      description={description}
      title="Checkbox Controlled"
    >
      <Checkbox {...args} value={value} onChange={setValue} />
    </StoryComponent>
  );
};

export const CheckboxControlled = Template.bind({});

CheckboxControlled.argTypes = {
  onChange: {
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

CheckboxControlled.args = {};
