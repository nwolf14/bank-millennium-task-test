import { ComponentStory, ComponentMeta } from '@storybook/react';

// components
import Select from '../Select';
import SelectItem from '../components/SelectItem/SelectItem';
import StoryComponent from '../../../../../stories/components/StoryComponent/StoryComponent';

// others
import { basicSelect } from '../../../../../stories/constants';
import { ContentGridFlow } from '../../../../../stories/components/StoryComponent/enums';
import { TStoryBlockCode } from '../../../../../stories/components/StoryBlockCode/types';

const description = [
  'Select components are used for collecting user provided information from a list of options.',
];

const blockCodeData: TStoryBlockCode = {
  componentName: 'Select',
  props: [
    {
      attributes: [{ name: 'label', value: 'Label' }],
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
      attributes: [{ name: 'forcedHover' }, { name: 'label', value: 'Label' }],
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
        { name: 'forcedSelected' },
        { name: 'label', value: 'Label' },
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
      attributes: [{ name: 'disabled' }, { name: 'label', value: 'Label' }],
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
  title: basicSelect,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => (
  <StoryComponent
    blockCodeData={blockCodeData}
    contentGridFlow={ContentGridFlow.maxFourColumns}
    description={description}
    title="Basic Select"
  >
    <Select label="Label" {...args}>
      <SelectItem value="item1">item 1</SelectItem>
      <SelectItem value="item2">item 2</SelectItem>
    </Select>
    <Select label="Label" forcedHover {...args}>
      <SelectItem value="item1">item 1</SelectItem>
      <SelectItem value="item2">item 2</SelectItem>
    </Select>
    <Select label="Label" forcedSelected {...args}>
      <SelectItem value="item1">item 1</SelectItem>
      <SelectItem value="item2">item 2</SelectItem>
    </Select>
    <Select label="Label" disabled {...args}>
      <SelectItem value="item1">item 1</SelectItem>
      <SelectItem value="item2">item 2</SelectItem>
    </Select>
  </StoryComponent>
);

export const BasicSelect = Template.bind({});

BasicSelect.argTypes = {};

BasicSelect.args = {};
