import { ComponentStory, ComponentMeta } from '@storybook/react';

// components
import RadioButton from '../RadioButton';
import StoryComponent from '../../../../../stories/components/StoryComponent/StoryComponent';

// others
import { ContentGridFlow } from '../../../../../stories/components/StoryComponent/enums';
import { radioButtonLabel } from '../../../../../stories/constants';
import { TStoryBlockCode } from '../../../../../stories/components/StoryBlockCode/types';

const description = [
  'You can provide a <code>label</code> to the <code>RadioButton</code> as a props.',
];

const blockCodeData: TStoryBlockCode = {
  componentName: 'RadioButton',
  props: [
    {
      attributes: [
        { name: 'label', value: 'label' },
        { name: 'name', value: 'radioButton' },
        { name: 'value', value: '0' },
      ],
      children: '',
    },
    {
      attributes: [
        { name: 'forcedHover' },
        { name: 'label', value: 'label' },
        { name: 'name', value: 'radioButton' },
        { name: 'value', value: '0' },
      ],
      children: '',
    },
    {
      attributes: [
        { name: 'forcedFocus' },
        { name: 'label', value: 'label' },
        { name: 'name', value: 'radioButton' },
        { name: 'value', value: '0' },
      ],
      children: '',
    },
    {
      attributes: [
        { name: 'disabled' },
        { name: 'label', value: 'label' },
        { name: 'name', value: 'radioButton' },
        { name: 'value', value: '0' },
      ],
      children: '',
    },
    {
      attributes: [
        { name: 'checked' },
        { name: 'label', value: 'label' },
        { name: 'name', value: 'radioButton1' },
        { name: 'value', value: '0' },
      ],
      children: '',
    },
    {
      attributes: [
        { name: 'checked' },
        { name: 'forcedHover' },
        { name: 'label', value: 'label' },
        { name: 'name', value: 'radioButton2' },
        { name: 'value', value: '0' },
      ],
      children: '',
    },
    {
      attributes: [
        { name: 'checked' },
        { name: 'forcedFocus' },
        { name: 'label', value: 'label' },
        { name: 'name', value: 'radioButton3' },
        { name: 'value', value: '0' },
      ],
      children: '',
    },
    {
      attributes: [
        { name: 'checked' },
        { name: 'disabled' },
        { name: 'label', value: 'label' },
        { name: 'name', value: 'radioButton4' },
        { name: 'value', value: '0' },
      ],
      children: '',
    },
  ],
  imports: [
    {
      items: 'RadioButton',
      path: './shared/ComponentsUI/components/RadioButton/RadioButton',
    },
  ],
};

export default {
  component: RadioButton,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/hVsmArh0s8VYibYYBtChnY/Components---UI?node-id=408%3A2',
    },
  },
  title: radioButtonLabel,
} as ComponentMeta<typeof RadioButton>;

const Template: ComponentStory<typeof RadioButton> = (args) => (
  <StoryComponent
    blockCodeData={blockCodeData}
    contentGridFlow={ContentGridFlow.maxFourColumns}
    description={description}
    title="Radio Button Label"
  >
    {/* UNCHECKED */}
    <RadioButton {...args} label="label" name="radioButton" value="0" />
    <RadioButton
      {...args}
      forcedHover
      label="label"
      name="radioButton"
      value="0"
    />
    <RadioButton
      {...args}
      forcedFocus
      label="label"
      name="radioButton"
      value="0"
    />
    <RadioButton
      {...args}
      disabled
      label="label"
      name="radioButton"
      value="0"
    />

    {/* CHECKED */}
    <RadioButton
      {...args}
      checked
      label="label"
      name="radioButton1"
      value="0"
    />
    <RadioButton
      {...args}
      checked
      forcedHover
      label="label"
      name="radioButton2"
      value="0"
    />
    <RadioButton
      {...args}
      checked
      forcedFocus
      label="label"
      name="radioButton3"
      value="0"
    />
    <RadioButton
      {...args}
      checked
      disabled
      label="label"
      name="radioButton4"
      value="0"
    />
  </StoryComponent>
);

export const RadioButtonLabel = Template.bind({});

RadioButtonLabel.argTypes = {
  checked: {
    table: {
      disable: true,
    },
  },
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
  name: {
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

RadioButtonLabel.args = {};
