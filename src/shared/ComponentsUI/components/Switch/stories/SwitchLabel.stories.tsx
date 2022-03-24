import { ComponentStory, ComponentMeta } from '@storybook/react';

// components
import StoryComponent from '../../../../../stories/components/StoryComponent/StoryComponent';
import Switch from '../Switch';

// others
import { switchLabel } from '../../../../../stories/constants';
import { ContentGridFlow } from '../../../../../stories/components/StoryComponent/enums';
import { TStoryBlockCode } from '../../../../../stories/components/StoryBlockCode/types';

const description = [
  'You can provide a <code>label</code> to the <code>Checkbox</code> as a props.',
];

const blockCodeData: TStoryBlockCode = {
  componentName: 'Switch',
  props: [
    {
      attributes: [{ name: 'label', value: 'Label' }],
      children: '',
    },
    {
      attributes: [{ name: 'disabled' }, { name: 'label', value: 'Label' }],
      children: '',
    },
    {
      attributes: [{ name: 'label', value: 'Label' }, { name: 'value' }],
      children: '',
    },
    {
      attributes: [
        { name: 'disabled' },
        { name: 'label', value: 'Label' },
        { name: 'value' },
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
  title: switchLabel,
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => (
  <StoryComponent
    blockCodeData={blockCodeData}
    contentGridFlow={ContentGridFlow.maxFourColumns}
    description={description}
    title="Switch Label"
  >
    {/* UNCHECKED */}
    <Switch label="label" {...args} />
    <Switch disabled label="label" {...args} />

    {/* CHECKED */}
    <Switch label="label" value {...args} />
    <Switch disabled label="label" value {...args} />
  </StoryComponent>
);

export const SwitchLabel = Template.bind({});

SwitchLabel.argTypes = {
  disabled: {
    table: {
      disable: true,
    },
  },
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

SwitchLabel.args = {};
