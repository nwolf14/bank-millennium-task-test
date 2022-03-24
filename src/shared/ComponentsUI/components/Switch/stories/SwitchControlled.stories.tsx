import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';

// components
import StoryComponent from '../../../../../stories/components/StoryComponent/StoryComponent';
import Switch from '../Switch';

// others
import { switchContrroled } from '../../../../../stories/constants';
import { TStoryBlockCode } from '../../../../../stories/components/StoryBlockCode/types';

const description = [
  'You can control the switch with the <code>value</code> and <code>onChange</code> props.',
];

const blockCodeData: TStoryBlockCode = {
  componentName: 'Switch',
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
      items: 'Switch',
      path: './shared/ComponentsUI/components/Switch/Switchs',
    },
  ],
};

export default {
  component: Switch,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/hVsmArh0s8VYibYYBtChnY/Components---UI?node-id=758%3A17',
    },
  },
  title: switchContrroled,
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => {
  const [value, setValue] = useState(false);

  return (
    <StoryComponent
      blockCodeData={blockCodeData}
      description={description}
      title="Switch Controlled"
    >
      <Switch {...args} value={value} onChange={setValue} />
    </StoryComponent>
  );
};

export const SwitchControlled = Template.bind({});

SwitchControlled.argTypes = {
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

SwitchControlled.args = {};
