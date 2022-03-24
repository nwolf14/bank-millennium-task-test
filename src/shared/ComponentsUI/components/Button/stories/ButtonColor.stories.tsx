import { ComponentStory, ComponentMeta } from '@storybook/react';

// components
import Button from '../Button';
import StoryComponent from '../../../../../stories/components/StoryComponent/StoryComponent';

// others
import { buttonColor } from '../../../../../stories/constants';
import { Color, Variant } from '../enums';
import { TStoryBlockCode } from '../../../../../stories/components/StoryBlockCode/types';

const blockCodeData: TStoryBlockCode = {
  componentName: 'Button',
  props: [
    {
      children: 'Text',
    },
    {
      attributes: [{ name: 'color', value: 'Color.secondary' }],
      children: 'Secondary',
    },
    {
      attributes: [{ name: 'color', value: 'Color.success' }],
      children: 'Success',
    },
    {
      attributes: [{ name: 'color', value: 'Color.warning' }],
      children: 'Warning',
    },
    {
      attributes: [{ name: 'color', value: 'Color.error' }],
      children: 'Error',
    },
  ],
  imports: [
    {
      items: 'Button',
      path: './shared/ComponentsUI/components/Button/Button',
    },
    {
      items: '{ Color }',
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
  title: buttonColor,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <StoryComponent blockCodeData={blockCodeData} title="Button Colors">
    <Button {...args}>Primary</Button>
    <Button color={Color.secondary} {...args}>
      Secondary
    </Button>
    <Button color={Color.success} {...args}>
      Success
    </Button>
    <Button color={Color.warning} {...args}>
      Warning
    </Button>
    <Button color={Color.error} {...args}>
      Error
    </Button>
  </StoryComponent>
);

export const ButtonColor = Template.bind({});

ButtonColor.argTypes = {
  color: {
    table: {
      disable: true,
    },
  },
};

ButtonColor.args = {
  variant: Variant.text,
};
