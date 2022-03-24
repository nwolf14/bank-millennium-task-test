import { ComponentStory, ComponentMeta } from '@storybook/react';

// components
import StoryComponent from '../../../../../stories/components/StoryComponent/StoryComponent';
import Switch from '../Switch';

// others
import { basicSwitch } from '../../../../../stories/constants';
import { ContentGridFlow } from '../../../../../stories/components/StoryComponent/enums';
import { TStoryBlockCode } from '../../../../../stories/components/StoryBlockCode/types';

const description = [
  'Switches toggle the state of a single setting on or off.',
];

const blockCodeData: TStoryBlockCode = {
  componentName: 'Switch',
  props: [
    {
      children: '',
    },
    {
      attributes: [{ name: 'disabled' }],
      children: '',
    },
    {
      attributes: [{ name: 'value' }],
      children: '',
    },
    {
      attributes: [{ name: 'disabled' }, { name: 'value' }],
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
  title: basicSwitch,
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => (
  <StoryComponent
    blockCodeData={blockCodeData}
    contentGridFlow={ContentGridFlow.maxFourColumns}
    description={description}
    title="Basic Switch"
  >
    {/* UNCHECKED */}
    <Switch {...args} />
    <Switch disabled {...args} />

    {/* CHECKED */}
    <Switch value {...args} />
    <Switch disabled value {...args} />
  </StoryComponent>
);

export const BasicSwitch = Template.bind({});

BasicSwitch.argTypes = {
  disabled: {
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

BasicSwitch.args = {};
