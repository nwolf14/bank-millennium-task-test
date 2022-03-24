import { ComponentStory, ComponentMeta } from '@storybook/react';

// components
import Checkbox from '../Checkbox';
import StoryComponent from '../../../../../stories/components/StoryComponent/StoryComponent';

// others
import { checkboxLabel } from '../../../../../stories/constants';
import { ContentGridFlow } from '../../../../../stories/components/StoryComponent/enums';
import { TStoryBlockCode } from '../../../../../stories/components/StoryBlockCode/types';

const description = [
  'You can provide a <code>label</code> to the <code>Checkbox</code> as a props.',
];

const blockCodeData: TStoryBlockCode = {
  componentName: 'Checkbox',
  props: [
    {
      attributes: [{ name: 'label', value: 'Label' }],
      children: '',
    },
    {
      attributes: [{ name: 'forcedHover' }, { name: 'label', value: 'Label' }],
      children: '',
    },
    {
      attributes: [{ name: 'forcedFocus' }, { name: 'label', value: 'Label' }],
      children: '',
    },
    {
      attributes: [{ name: 'disabled' }, { name: 'label', value: 'Label' }],
      children: '',
    },
    {
      attributes: [{ name: 'defaultValue' }, { name: 'label', value: 'Label' }],
      children: '',
    },
    {
      attributes: [
        { name: 'defaultValue' },
        { name: 'forcedHover' },
        { name: 'label', value: 'Label' },
      ],
      children: '',
    },
    {
      attributes: [
        { name: 'defaultValue' },
        { name: 'forcedFocus' },
        { name: 'label', value: 'Label' },
      ],
      children: '',
    },
    {
      attributes: [
        { name: 'defaultValue' },
        { name: 'disabled' },
        { name: 'label', value: 'Label' },
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
  title: checkboxLabel,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <StoryComponent
    blockCodeData={blockCodeData}
    contentGridFlow={ContentGridFlow.maxFourColumns}
    description={description}
    title="Checkbox Label"
  >
    {/* UNCHECKED */}
    <Checkbox label="Label" {...args} />
    <Checkbox forcedHover label="Label" {...args} />
    <Checkbox forcedFocus label="Label" {...args} />
    <Checkbox disabled label="Label" {...args} />

    {/* CHECKED */}
    <Checkbox defaultValue label="Label" {...args} />
    <Checkbox defaultValue forcedHover label="Label" {...args} />
    <Checkbox defaultValue forcedFocus label="Label" {...args} />
    <Checkbox defaultValue disabled label="Label" {...args} />
  </StoryComponent>
);

export const CheckboxLabel = Template.bind({});

CheckboxLabel.argTypes = {
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

CheckboxLabel.args = {};
