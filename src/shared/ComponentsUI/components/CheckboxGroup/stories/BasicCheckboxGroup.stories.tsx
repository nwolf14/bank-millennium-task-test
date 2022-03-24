import { ComponentStory, ComponentMeta } from '@storybook/react';

// components
import Checkbox from '../../Checkbox/Checkbox';
import CheckboxGroup from '../CheckboxGroup';
import StoryComponent from '../../../../../stories/components/StoryComponent/StoryComponent';

// others
import { basicCheckboxGroup } from '../../../../../stories/constants';
import { TStoryBlockCode } from '../../../../../stories/components/StoryBlockCode/types';

const description = [
  '<code>CheckboxGroup</code> is a helpful wrapper used to group selection control components.',
];

const blockCodeData: TStoryBlockCode = {
  componentName: 'CheckboxGroup',
  props: [
    {
      attributes: [{ name: 'label', value: 'Parent' }],
      children: [
        {
          componentName: 'Checkbox',
          props: [{ attributes: [{ name: 'label', value: 'Child 1' }] }],
        },
        {
          componentName: 'Checkbox',
          props: [{ attributes: [{ name: 'label', value: 'Child 2' }] }],
        },
        {
          componentName: 'Checkbox',
          props: [{ attributes: [{ name: 'label', value: 'Child 3' }] }],
        },
      ],
    },
  ],
  imports: [
    {
      items: 'CheckboxGroup',
      path: './shared/ComponentsUI/components/CheckboxGroup/CheckboxGroup',
    },
    {
      items: 'Checkbox',
      path: './shared/ComponentsUI/components/Checkbox/Checkbox',
    },
  ],
};

export default {
  component: CheckboxGroup,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/hVsmArh0s8VYibYYBtChnY/Components---UI?node-id=318%3A183',
    },
  },
  title: basicCheckboxGroup,
} as ComponentMeta<typeof CheckboxGroup>;

const Template: ComponentStory<typeof CheckboxGroup> = (args) => (
  <StoryComponent
    blockCodeData={blockCodeData}
    description={description}
    title="Basic Checkbox Group"
  >
    <CheckboxGroup label="Parent" {...args}>
      <Checkbox label="Child 1" />
      <Checkbox label="Child 2" />
      <Checkbox label="Child 3" />
    </CheckboxGroup>
  </StoryComponent>
);

export const BasicCheckboxGroup = Template.bind({});

BasicCheckboxGroup.argTypes = {
  valueGroup: {
    table: {
      disable: true,
    },
  },
  onChange: {
    table: {
      disable: true,
    },
  },
};

BasicCheckboxGroup.args = {};
