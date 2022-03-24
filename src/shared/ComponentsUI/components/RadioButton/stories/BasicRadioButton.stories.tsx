import { ComponentStory, ComponentMeta } from '@storybook/react';

// components
import RadioButton from '../RadioButton';
import StoryComponent from '../../../../../stories/components/StoryComponent/StoryComponent';

// others
import { basicRadioButton } from '../../../../../stories/constants';
import { ContentGridFlow } from '../../../../../stories/components/StoryComponent/enums';
import { TStoryBlockCode } from '../../../../../stories/components/StoryBlockCode/types';

const description = [
  'Radio button allow the user to select one option from a set.',
];

const blockCodeData: TStoryBlockCode = {
  componentName: 'RadioButton',
  props: [
    {
      attributes: [
        { name: 'name', value: 'radioButton' },
        { name: 'value', value: '0' },
      ],
      children: '',
    },
    {
      attributes: [
        { name: 'forcedHover' },
        { name: 'name', value: 'radioButton' },
        { name: 'value', value: '0' },
      ],
      children: '',
    },
    {
      attributes: [
        { name: 'forcedFocus' },
        { name: 'name', value: 'radioButton' },
        { name: 'value', value: '0' },
      ],
      children: '',
    },
    {
      attributes: [
        { name: 'checked' },
        { name: 'disabled' },
        { name: 'name', value: 'radioButton' },
        { name: 'value', value: '0' },
      ],
      children: '',
    },
    {
      attributes: [
        { name: 'checked' },
        { name: 'name', value: 'radioButton1' },
        { name: 'value', value: '0' },
      ],
      children: '',
    },
    {
      attributes: [
        { name: 'checked' },
        { name: 'forcedHover' },
        { name: 'name', value: 'radioButton2' },
        { name: 'value', value: '0' },
      ],
      children: '',
    },
    {
      attributes: [
        { name: 'checked' },
        { name: 'forcedFocus' },
        { name: 'name', value: 'radioButton3' },
        { name: 'value', value: '0' },
      ],
      children: '',
    },
    {
      attributes: [
        { name: 'checked' },
        { name: 'disabled' },
        { name: 'name', value: 'radioButton5' },
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
  title: basicRadioButton,
} as ComponentMeta<typeof RadioButton>;

const Template: ComponentStory<typeof RadioButton> = (args) => (
  <StoryComponent
    blockCodeData={blockCodeData}
    contentGridFlow={ContentGridFlow.maxFourColumns}
    description={description}
    title="Basic Radio Button"
  >
    {/* UNCHECKED */}
    <RadioButton {...args} name="radioButton" value="0" />
    <RadioButton {...args} forcedHover name="radioButton" value="0" />
    <RadioButton {...args} forcedFocus name="radioButton" value="0" />
    <RadioButton {...args} disabled name="radioButton" value="0" />

    {/* CHECKED */}
    <RadioButton {...args} checked name="radioButon1" value="0" />
    <RadioButton {...args} checked forcedHover name="radioButon2" value="0" />
    <RadioButton {...args} checked forcedFocus name="radioButon3" value="0" />
    <RadioButton {...args} checked disabled name="radioButon4" value="0" />
  </StoryComponent>
);

export const BasicRadioButton = Template.bind({});

BasicRadioButton.argTypes = {
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

BasicRadioButton.args = {};
