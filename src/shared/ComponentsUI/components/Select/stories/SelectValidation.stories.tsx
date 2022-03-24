import { ComponentStory, ComponentMeta } from '@storybook/react';

// components
import Select from '../Select';
import SelectItem from '../components/SelectItem/SelectItem';
import StoryComponent from '../../../../../stories/components/StoryComponent/StoryComponent';

// others
import { selectValidation } from '../../../../../stories/constants';
import { TStoryBlockCode } from '../../../../../stories/components/StoryBlockCode/types';

const description = [
  'The <code>errorMessage</code> prop toggles the error state.',
];

const blockCodeData: TStoryBlockCode = {
  componentName: 'Select',
  props: [
    {
      attributes: [
        { name: 'errorMessage', value: 'Required' },
        { name: 'label', value: 'Single' },
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
        { name: 'errorMessage', value: 'Required' },
        { name: 'label', value: 'Multiple' },
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
  title: selectValidation,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => (
  <StoryComponent
    blockCodeData={blockCodeData}
    description={description}
    title="Select Validation"
  >
    <Select errorMessage="Required" {...args} label="Single">
      <SelectItem value="item1">item 1</SelectItem>
      <SelectItem value="item2">item 2</SelectItem>
    </Select>
    <Select errorMessage="Required" {...args} label="Multiple" multiple>
      <SelectItem value="item1">item 1</SelectItem>
      <SelectItem value="item2">item 2</SelectItem>
    </Select>
  </StoryComponent>
);

export const SelectValidation = Template.bind({});

SelectValidation.argTypes = {};

SelectValidation.args = {};
