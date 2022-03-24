import { ComponentStory, ComponentMeta } from '@storybook/react';

// components
import Checkbox from '../../Checkbox/Checkbox';
import CheckboxGroup from '../CheckboxGroup';
import StoryComponent from '../../../../../stories/components/StoryComponent/StoryComponent';

// others
import { checkboxGroupValidation } from '../../../../../stories/constants';
import { TStoryBlockCode } from '../../../../../stories/components/StoryBlockCode/types';

const description = [
  'The <code>errorMessage</code> prop toggles the error state.',
];

const blockCodeData: TStoryBlockCode = {
  componentName: 'CheckboxGroup',
  props: [
    {
      attributes: [{ name: 'label', value: 'Parent' }],
      children: [
        {
          componentName: 'Checkbox',
          props: [
            {
              attributes: [
                { name: 'errorMessage', value: 'Required' },
                { name: 'label', value: 'Child 1' },
              ],
            },
          ],
        },
        {
          componentName: 'Checkbox',
          props: [
            {
              attributes: [
                { name: 'errorMessage', value: 'Required' },
                { name: 'label', value: 'Child 2' },
              ],
            },
          ],
        },
        {
          componentName: 'Checkbox',
          props: [
            {
              attributes: [
                { name: 'errorMessage', value: 'Required' },
                { name: 'label', value: 'Child 3' },
              ],
            },
          ],
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
  title: checkboxGroupValidation,
} as ComponentMeta<typeof CheckboxGroup>;

const Template: ComponentStory<typeof CheckboxGroup> = (args) => (
  <StoryComponent
    blockCodeData={blockCodeData}
    description={description}
    title="Checkbox Group Validation"
  >
    <CheckboxGroup label="Parent" {...args}>
      <Checkbox errorMessage="Required" label="Child 1" />
      <Checkbox errorMessage="Required" label="Child 2" />
      <Checkbox errorMessage="Required" label="Child 3" />
    </CheckboxGroup>
  </StoryComponent>
);

export const CheckboxGroupValidation = Template.bind({});

CheckboxGroupValidation.argTypes = {
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

CheckboxGroupValidation.args = {};
