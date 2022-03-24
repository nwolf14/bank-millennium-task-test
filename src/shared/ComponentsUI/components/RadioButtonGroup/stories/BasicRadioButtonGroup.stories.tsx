import { ComponentStory, ComponentMeta } from '@storybook/react';

// components
import RadioButton from '../../RadioButton/RadioButton';
import RadioButtonGroup from '../RadioButtonGroup';
import StoryComponent from '../../../../../stories/components/StoryComponent/StoryComponent';

// others
import { basicRadioButtonGroup } from '../../../../../stories/constants';
import { TStoryBlockCode } from '../../../../../stories/components/StoryBlockCode/types';

const description = [
  '<code>RadioButtonGroup</code> is a helpful wrapper used to group selection control components.',
];

const blockCodeData: TStoryBlockCode = {
  componentName: 'RadioButtonGroup',
  props: [
    {
      attributes: [
        { name: 'label', value: 'Parent' },
        { name: 'name', value: 'radioButton' },
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
  title: basicRadioButtonGroup,
} as ComponentMeta<typeof RadioButtonGroup>;

const Template: ComponentStory<typeof RadioButtonGroup> = (args) => (
  <StoryComponent
    blockCodeData={blockCodeData}
    description={description}
    title="Basic Radio Button Group"
  >
    <RadioButtonGroup label="Parent" name="radioButton" {...args}>
      <RadioButton label="Child1" value="0" />
      <RadioButton label="Child2" value="1" />
      <RadioButton label="Child3" value="2" />
    </RadioButtonGroup>
  </StoryComponent>
);

export const BasicRadioButtonGroup = Template.bind({});

BasicRadioButtonGroup.argTypes = {
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
};

BasicRadioButtonGroup.args = {};
