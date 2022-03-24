import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';

// components
import Select from '../Select';
import SelectItem from '../components/SelectItem/SelectItem';
import StoryComponent from '../../../../../stories/components/StoryComponent/StoryComponent';

// others
import { selectControlled } from '../../../../../stories/constants';
import { TStoryBlockCode } from '../../../../../stories/components/StoryBlockCode/types';

const description = [
  `The <code>Select</code> component can handle multiple selections. It's enabled with the <code>multiple</code> prop.`,
];

const blockCodeData: TStoryBlockCode = {
  componentName: 'Select',
  props: [
    {
      attributes: [
        { name: 'label', value: 'Single' },
        { name: 'onChange', value: '{(value) => setValue(value as string)}' },
        { name: 'value', value: '{value}' },
      ],
      children: [
        {
          componentName: 'SelectItem',
          props: [
            {
              attributes: [{ name: 'value', value: 'item1' }],
              children: 'item 1',
            },
          ],
        },
        {
          componentName: 'SelectItem',
          props: [
            {
              attributes: [{ name: 'value', value: 'item2' }],
              children: 'item 2',
            },
          ],
        },
      ],
    },
    {
      attributes: [
        { name: 'label', value: 'Multiple' },
        { name: 'multiple' },
        {
          name: 'onChange',
          value: '{(values) => setValues(values as Array<string>)}',
        },
        { name: 'value', value: '{values}' },
      ],
      children: [
        {
          componentName: 'SelectItem',
          props: [
            {
              attributes: [{ name: 'value', value: 'item1' }],
              children: 'item 1',
            },
          ],
        },
        {
          componentName: 'SelectItem',
          props: [
            {
              attributes: [{ name: 'value', value: 'item2' }],
              children: 'item 2',
            },
          ],
        },
      ],
    },
  ],
  imports: [
    {
      items: 'Select',
      path: './shared/ComponentsUI/components/Select/Select',
    },
    {
      items: 'SelectItem',
      path: './shared/ComponentsUI/components/Select/components/SelectItem/SelectItem',
    },
  ],
};

export default {
  component: Select,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/hVsmArh0s8VYibYYBtChnY/Components---UI?node-id=633%3A19',
    },
  },
  title: selectControlled,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => {
  const [value, setValue] = useState('');
  const [values, setValues] = useState<Array<string>>([]);

  return (
    <StoryComponent
      blockCodeData={blockCodeData}
      description={description}
      title="Select Controlled"
    >
      <Select
        {...args}
        label="Single"
        onChange={(value) => setValue(value as string)}
        value={value}
      >
        <SelectItem value="item1">item 1</SelectItem>
        <SelectItem value="item2">item 2</SelectItem>
      </Select>
      <Select
        {...args}
        label="Multiple"
        multiple
        onChange={(value) => setValues(value as Array<string>)}
        value={values}
      >
        <SelectItem value="item1">item 1</SelectItem>
        <SelectItem value="item2">item 2</SelectItem>
      </Select>
    </StoryComponent>
  );
};

export const SelectControlled = Template.bind({});

SelectControlled.argTypes = {};

SelectControlled.args = {};
