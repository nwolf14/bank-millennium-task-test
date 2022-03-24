import { ComponentStory, ComponentMeta } from '@storybook/react';

// components
import Checkbox from '../Checkbox';
import StoryComponent from '../../../../../stories/components/StoryComponent/StoryComponent';

// others
import { basicCheckbox } from '../../../../../stories/constants';
import { ContentGridFlow } from '../../../../../stories/components/StoryComponent/enums';
import { TStoryBlockCode } from '../../../../../stories/components/StoryBlockCode/types';

const description = [
  'Checkboxes allow the user to select one or more items from a set.',
];

const blockCodeData: TStoryBlockCode = {
  componentName: 'Checkbox',
  props: [
    {
      children: '',
    },
    {
      attributes: [{ name: 'forcedHover' }],
      children: '',
    },
    {
      attributes: [{ name: 'forcedFocus' }],
      children: '',
    },
    {
      attributes: [{ name: 'disabled' }],
      children: '',
    },
    {
      attributes: [{ name: 'defualtValue' }],
      children: '',
    },
    {
      attributes: [{ name: 'defualtValue' }, { name: 'forcedHover' }],
      children: '',
    },
    {
      attributes: [{ name: 'defualtValue' }, { name: 'forcedFocus' }],
      children: '',
    },
    {
      attributes: [{ name: 'defualtValue' }, { name: 'disabled' }],
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
  title: basicCheckbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <StoryComponent
    blockCodeData={blockCodeData}
    contentGridFlow={ContentGridFlow.maxFourColumns}
    description={description}
    title="Basic Checkbox"
  >
    {/* UNCHECKED */}
    <Checkbox {...args} />
    <Checkbox forcedHover {...args} />
    <Checkbox forcedFocus {...args} />
    <Checkbox disabled {...args} />

    {/* CHECKED */}
    <Checkbox defaultValue {...args} />
    <Checkbox defaultValue forcedHover {...args} />
    <Checkbox defaultValue forcedFocus {...args} />
    <Checkbox defaultValue disabled {...args} />
  </StoryComponent>
);

export const BasicCheckbox = Template.bind({});

BasicCheckbox.argTypes = {
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
  value: {
    table: {
      disable: true,
    },
  },
};

BasicCheckbox.args = {};
