import { ComponentStory, ComponentMeta } from '@storybook/react';

// components
import TextField from '../TextField';
import StoryComponent from '../../../../../stories/components/StoryComponent/StoryComponent';

// others
import { ContentGridFlow } from '../../../../../stories/components/StoryComponent/enums';
import { textFieldValidation } from '../../../../../stories/constants';
import { TStoryBlockCode } from '../../../../../stories/components/StoryBlockCode/types';

const description = [
  'The <code>errorMessage</code> prop toggles the error state. The <code>helperText</code> prop can then be used to provide feedback to the user about the error.',
];

const blockCodeData: TStoryBlockCode = {
  componentName: 'TextField',
  props: [
    {
      attributes: [
        { name: 'error', value: 'Error' },
        { name: 'label', value: 'Error' },
      ],
      children: '',
    },
    {
      attributes: [
        { name: 'defaultValue', value: 'Error' },
        { name: 'error', value: 'Error' },
        { name: 'label', value: 'Error' },
      ],
      children: '',
    },
    {
      attributes: [
        { name: 'error', value: 'Error' },
        { name: 'forcedFocus' },
        { name: 'label', value: 'Error' },
      ],
      children: '',
    },
    {
      attributes: [
        { name: 'defaultValue', value: 'Error' },
        { name: 'error', value: 'Error' },
        { name: 'forcedFocus' },
        { name: 'forcedFocus' },
        { name: 'label', value: 'Error' },
      ],
      children: '',
    },
  ],
  imports: [
    {
      items: 'TextField',
      path: './shared/ComponentsUI/components/TextField/TextField',
    },
  ],
};

export default {
  component: TextField,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/hVsmArh0s8VYibYYBtChnY/Components---UI?node-id=592%3A17',
    },
  },
  title: textFieldValidation,
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => (
  <StoryComponent
    blockCodeData={blockCodeData}
    contentGridFlow={ContentGridFlow.maxTwoColumns}
    description={description}
    title="Text Field Validation"
  >
    <TextField {...args} errorMessage="Error" label="Error" />
    <TextField
      {...args}
      defaultValue="Error"
      errorMessage="Error"
      label="Error"
    />
    <TextField {...args} errorMessage="Error" forcedFocus label="Error" />
    <TextField
      {...args}
      defaultValue="Error"
      errorMessage="Error"
      forcedFocus
      label="Error"
    />
  </StoryComponent>
);

export const TextFieldValidation = Template.bind({});

TextFieldValidation.argTypes = {
  defaultValue: {
    table: {
      disable: true,
    },
  },
  label: {
    error: {
      table: {
        disable: true,
      },
    },
    forcedFocus: {
      table: {
        disable: true,
      },
    },
    table: {
      disable: true,
    },
  },
};

TextFieldValidation.args = {};
