import { ComponentStory, ComponentMeta } from '@storybook/react';

// components
import RadioButton from '../RadioButton';
import StoryComponent from '../../../../../stories/components/StoryComponent/StoryComponent';

// others
import { ContentGridFlow } from '../../../../../stories/components/StoryComponent/enums';
import { radioButtonSize } from '../../../../../stories/constants';
import { Size } from '../enums';
import { TStoryBlockCode } from '../../../../../stories/components/StoryBlockCode/types';

const description = [
  'Use the <code>size</code> prop or customize the font size of the svg icons to change the size of the radios.',
];

const blockCodeData: TStoryBlockCode = {
  componentName: 'RadioButton',
  props: [
    {
      attributes: [
        { name: 'name', value: 'radioButton' },
        { name: 'size', value: 'Size.small' },
        { name: 'value', value: '0' },
      ],
      children: '',
    },
    {
      attributes: [
        { name: 'name', value: 'radioButton' },
        { name: 'value', value: '0' },
      ],
      children: '',
    },
    {
      attributes: [
        { name: 'name', value: 'radioButton3' },
        { name: 'size', value: 'Size.large' },
        { name: 'value', value: '0' },
      ],
      children: '',
    },
    {
      attributes: [
        { name: 'label', value: 'label' },
        { name: 'name', value: 'radioButton1' },
        { name: 'checkedValue', value: '0' },
        { name: 'size', value: 'Size.small' },
        { name: 'value', value: '0' },
      ],
      children: '',
    },
    {
      attributes: [
        { name: 'label', value: 'label' },
        { name: 'name', value: 'radioButton2' },
        { name: 'checkedValue', value: '0' },
        { name: 'value', value: '0' },
      ],
      children: '',
    },
    {
      attributes: [
        { name: 'label', value: 'label' },
        { name: 'name', value: 'radioButton3' },
        { name: 'checkedValue', value: '0' },
        { name: 'size', value: 'Size.large' },
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
    {
      items: '{ Size }',
      path: './shared/ComponentsUI/components/RadioButton/enums',
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
  title: radioButtonSize,
} as ComponentMeta<typeof RadioButton>;

const Template: ComponentStory<typeof RadioButton> = (args) => (
  <StoryComponent
    blockCodeData={blockCodeData}
    contentGridFlow={ContentGridFlow.maxThreeColumns}
    description={description}
    title="Radio Button Size"
  >
    {/* WITHOUT LABEL */}
    <RadioButton name="radioButton" size={Size.small} {...args} />
    <RadioButton forcedHover name="radioButton" {...args} />
    <RadioButton name="radioButton" size={Size.large} {...args} />

    {/* WITH LABEL */}
    <RadioButton
      {...args}
      label="label"
      name="radioButton1"
      value="0"
      size={Size.small}
    />
    <RadioButton label="label" name="radioButton2" {...args} />
    <RadioButton
      label="label"
      name="radioButton3"
      size={Size.large}
      {...args}
    />
  </StoryComponent>
);

export const RadioButtonSize = Template.bind({});

RadioButtonSize.argTypes = {
  label: {
    table: {
      disable: true,
    },
  },
  name: {
    table: {
      disable: true,
    },
  },
  size: {
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

RadioButtonSize.args = {};
