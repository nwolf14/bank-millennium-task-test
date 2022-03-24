import { ComponentStory, ComponentMeta } from '@storybook/react';

// components
import Checkbox from '../Checkbox';
import StoryComponent from '../../../../../stories/components/StoryComponent/StoryComponent';

// others
import { checkboxValidation } from '../../../../../stories/constants';
import { TStoryBlockCode } from '../../../../../stories/components/StoryBlockCode/types';

const description = [
  'The <code>errorMessage</code> prop toggles the error state.',
];

const blockCodeData: TStoryBlockCode = {
  componentName: 'Checkbox',
  props: [
    {
      attributes: [
        { name: 'errorMessage', value: 'Required' },
        { name: 'label', value: 'Label' },
        { name: 'value', value: 'false' },
      ],
      children: '',
    },
  ],
  imports: [
    {
      items: 'Checkbox',
      path: './shared/ComponentsUI/components/Checkbox/Checkbox',
    },
  ],
};

export default {
  component: Checkbox,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/hVsmArh0s8VYibYYBtChnY/Components---UI?node-id=281%3A2',
    },
  },
  title: checkboxValidation,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <StoryComponent
    blockCodeData={blockCodeData}
    description={description}
    title="Checkbox Validation"
  >
    <Checkbox errorMessage="Required" label="Label" value={false} {...args} />
  </StoryComponent>
);

export const CheckboxValidation = Template.bind({});

CheckboxValidation.argTypes = {
  errorMessage: {
    table: {
      disable: true,
    },
  },
  label: {
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

CheckboxValidation.args = {};
