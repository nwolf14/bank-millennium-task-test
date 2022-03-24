import { ComponentStory, ComponentMeta } from '@storybook/react';

// components
import Button from '../Button';
import StoryComponent from '../../../../../stories/components/StoryComponent/StoryComponent';

// others
import { Color } from '../enums';
import { textButton } from '../../../../../stories/constants';
import { TStoryBlockCode } from '../../../../../stories/components/StoryBlockCode/types';

const description = [
  '<code>Text buttons</code> are typically used for less-pronounced actions, including those located: in dialogs, in cards. In cards, text buttons help maintain an emphasis on card content.',
];

const blockCodeData: TStoryBlockCode = {
  componentName: 'Button',
  props: [
    {
      attributes: [{ name: 'variant', value: 'Variant.text' }],
      children: 'Text',
    },
    {
      attributes: [
        { name: 'forcedHover', value: '' },
        { name: 'variant', value: 'Variant.text' },
      ],
      children: 'Hover',
    },
    {
      attributes: [
        { name: 'disabled', value: '' },
        { name: 'variant', value: 'Variant.text' },
      ],
      children: 'Disabled',
    },
  ],
  imports: [
    {
      items: 'Button',
      path: './shared/ComponentsUI/components/Button/Button',
    },
    {
      items: '{ Variant }',
      path: './shared/ComponentsUI/components/Button/enums',
    },
  ],
};

export default {
  component: Button,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/hVsmArh0s8VYibYYBtChnY/Components---UI?node-id=4%3A2',
    },
  },
  title: textButton,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <StoryComponent
    blockCodeData={blockCodeData}
    description={description}
    title="Text Button"
  >
    <Button {...args}>Text</Button>
    <Button forcedHover {...args}>
      Hover
    </Button>
    <Button disabled {...args}>
      Disabled
    </Button>
  </StoryComponent>
);

export const TextButton = Template.bind({});

TextButton.argTypes = {
  disabled: {
    table: {
      disable: true,
    },
  },
  forcedHover: {
    table: {
      disable: true,
    },
  },
  variant: {
    table: {
      disable: true,
    },
  },
};

TextButton.args = {
  color: Color.primary,
};
