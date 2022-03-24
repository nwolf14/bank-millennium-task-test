import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';

// components
import RadioButton from '../../RadioButton/RadioButton';
import RadioButtonGroup from '../RadioButtonGroup';
import StoryComponent from '../../../../../stories/components/StoryComponent/StoryComponent';

// others
import { radioButtonGroupControlled } from '../../../../../stories/constants';
import { TStoryBlockCode } from '../../../../../stories/components/StoryBlockCode/types';

const description = [
  'You can control the radio with the <code>value</code> and <code>onChange</code> props.',
];

const blockCodeData: TStoryBlockCode = {
  componentName: 'RadioButtonGroup',
  props: [
    {
      attributes: [
        { name: 'label', value: 'Parent' },
        { name: 'name', value: 'radioButton' },
        {
          name: 'onChange',
          value: `{setValue}`,
        },
        { name: 'value', value: '{value}' },
      ],
      children: [
        {
          componentName: 'RadioButton',
          props: [
            {
              attributes: [
                { name: 'label', value: 'Child 1' },
                { name: 'value', value: '0' },
              ],
            },
          ],
        },
        {
          componentName: 'RadioButton',
          props: [
            {
              attributes: [
                { name: 'label', value: 'Child 2' },
                { name: 'value', value: '1' },
              ],
            },
          ],
        },
        {
          componentName: 'RadioButton',
          props: [
            {
              attributes: [
                { name: 'label', value: 'Child 2' },
                { name: 'value', value: '2' },
              ],
            },
          ],
        },
      ],
    },
  ],
  imports: [
    {
      items: 'RadioButtonGroup',
      path: './shared/ComponentsUI/components/RadioButtonGroup/RadioButtonGroup',
    },
    {
      items: 'RadioButton',
      path: './shared/ComponentsUI/components/RadioButton/RadioButton',
    },
  ],
};

export default {
  component: RadioButtonGroup,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/hVsmArh0s8VYibYYBtChnY/Components---UI?node-id=582%3A22',
    },
  },
  title: radioButtonGroupControlled,
} as ComponentMeta<typeof RadioButtonGroup>;

const Template: ComponentStory<typeof RadioButtonGroup> = (args) => {
  const [value, setValue] = useState('');

  return (
    <StoryComponent
      blockCodeData={blockCodeData}
      description={description}
      title="Radio Button Group Controlled"
    >
      <RadioButtonGroup
        {...args}
        label="Parent"
        name="radioButton"
        onChange={setValue}
        value={value}
      >
        <RadioButton label="Child1" value="0" />
        <RadioButton label="Child2" value="1" />
        <RadioButton label="Child3" value="2" />
      </RadioButtonGroup>
    </StoryComponent>
  );
};

export const RadioButtonGroupControlled = Template.bind({});

RadioButtonGroupControlled.argTypes = {
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

RadioButtonGroupControlled.args = {};
