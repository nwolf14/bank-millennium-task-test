import { ComponentStory, ComponentMeta } from '@storybook/react';

// components
import Select from '../Select';
import SelectItem from '../components/SelectItem/SelectItem';
import StoryComponent from '../../../../../stories/components/StoryComponent/StoryComponent';

// others
import { multipleSelect } from '../../../../../stories/constants';
import { TStoryBlockCode } from '../../../../../stories/components/StoryBlockCode/types';

const description = [
  `The <code>Select</code> component can handle multiple selections. It's enabled with the <code>multiple</code> prop.`,
];

const blockCodeData: TStoryBlockCode = {
  componentName: 'Select',
  props: [
    {
      attributes: [{ name: 'label', value: 'Label' }, { name: 'multiple' }],
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
  title: multipleSelect,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => (
  <StoryComponent
    blockCodeData={blockCodeData}
    description={description}
    title="Multiple Select"
  >
    <Select label="Label" multiple {...args}>
      <SelectItem value="item1">item 1</SelectItem>
      <SelectItem value="item2">item 2</SelectItem>
    </Select>
  </StoryComponent>
);

export const MultipleSelect = Template.bind({});

MultipleSelect.argTypes = {};

MultipleSelect.args = {};
