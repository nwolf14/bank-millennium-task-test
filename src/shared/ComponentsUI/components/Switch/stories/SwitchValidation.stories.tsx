import { ComponentStory, ComponentMeta } from '@storybook/react';

// components
import StoryComponent from '../../../../../stories/components/StoryComponent/StoryComponent';
import Switch from '../Switch';

// others
import { switchValidation } from '../../../../../stories/constants';
import { TStoryBlockCode } from '../../../../../stories/components/StoryBlockCode/types';

const description = [
  'The <code>errorMessage</code> prop toggles the error state.',
];

const blockCodeData: TStoryBlockCode = {
  componentName: 'Switch',
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
      items: 'Switch',
      path: './shared/ComponentsUI/components/Switch/Switch',
    },
  ],
};

export default {
  component: Switch,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/hVsmArh0s8VYibYYBtChnY/Components---UI?node-id=758%3A17',
    },
  },
  title: switchValidation,
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => (
  <StoryComponent
    blockCodeData={blockCodeData}
    description={description}
    title="Switch Validation"
  >
    <Switch errorMessage="Required" label="Label" {...args} />
  </StoryComponent>
);

export const SwitchValidation = Template.bind({});

SwitchValidation.argTypes = {
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
};

SwitchValidation.args = {};
