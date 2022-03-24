import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';

// components
import Checkbox from '../../Checkbox/Checkbox';
import CheckboxGroup from '../CheckboxGroup';
import StoryComponent from '../../../../../stories/components/StoryComponent/StoryComponent';

// others
import { checkboxGroupControlled } from '../../../../../stories/constants';
import { TStoryBlockCode } from '../../../../../stories/components/StoryBlockCode/types';

const description = [
  'You can control the parent checkbox with the <code>value</code> and <code>onChange</code> props.',
];

const blockCodeData: TStoryBlockCode = {
  componentName: 'CheckboxGroup',
  props: [
    {
      attributes: [
        { name: 'checked', value: '{checked}' },
        { name: 'label', value: 'Parent' },
        { name: 'onChange', value: `{setChecked}` },
      ],
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
  title: checkboxGroupControlled,
} as ComponentMeta<typeof CheckboxGroup>;

const Template: ComponentStory<typeof CheckboxGroup> = (args) => {
  const [checkedGroup, setCheckedGroup] = useState([false, false, false]);

  return (
    <StoryComponent
      blockCodeData={blockCodeData}
      description={description}
      title="Checkbox Group Controlled"
    >
      <CheckboxGroup
        {...args}
        valueGroup={checkedGroup}
        label="Parent"
        onChange={(checkedGroup) => setCheckedGroup([...checkedGroup])}
      >
        <Checkbox label="Child 1" />
        <Checkbox label="Child 2" />
        <Checkbox label="Child 3" />
      </CheckboxGroup>
    </StoryComponent>
  );
};

export const CheckboxGroupControlled = Template.bind({});

CheckboxGroupControlled.argTypes = {
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

CheckboxGroupControlled.args = {};
