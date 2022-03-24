import { ComponentStory, ComponentMeta } from '@storybook/react';

// components
import StoryComponent from '../../../../../stories/components/StoryComponent/StoryComponent';
import Switch from '../Switch';

// others
import { switchSize } from '../../../../../stories/constants';
import { ContentGridFlow } from '../../../../../stories/components/StoryComponent/enums';
import { Size } from '../enums';
import { TStoryBlockCode } from '../../../../../stories/components/StoryBlockCode/types';

const description = [
  'Use the <code>size</code> prop or customize the font size of the svg icons to change the size of the switches.',
];

const blockCodeData: TStoryBlockCode = {
  componentName: 'Switch',
  props: [
    {
      attributes: [{ name: 'size', value: 'Size.small' }],
      children: '',
    },
    {
      children: '',
    },
    {
      attributes: [
        { name: 'label', value: 'Label' },
        { name: 'size', value: 'Size.small' },
      ],
      children: '',
    },
    {
      attributes: [{ name: 'label', value: 'Label' }],
      children: '',
    },
  ],
  imports: [
    {
      items: 'Switch',
      path: './shared/ComponentsUI/components/Switch/Switch',
    },
    {
      items: '{ Size }',
      path: './shared/ComponentsUI/components/Switch/enums',
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
  title: switchSize,
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => (
  <StoryComponent
    blockCodeData={blockCodeData}
    contentGridFlow={ContentGridFlow.maxFourColumns}
    description={description}
    title="Switch Size"
  >
    {/* WITHOUT LABEL */}
    <Switch size={Size.small} {...args} />
    <Switch {...args} />

    {/* WITH LABEL */}
    <Switch label="Label" size={Size.small} {...args} />
    <Switch label="Label" {...args} />
  </StoryComponent>
);

export const SwitchSize = Template.bind({});

SwitchSize.argTypes = {
  label: {
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

SwitchSize.args = {};
