import { ComponentStory, ComponentMeta } from '@storybook/react';

// components
import Button from '../Button';
import StoryComponent from '../../../../../stories/components/StoryComponent/StoryComponent';

// others
import Send from '../../../../../stories/assets/icons/send.svg';
import TrashWhite from '../../../../../stories/assets/icons/trash-white.svg';
import { buttonWithIcon } from '../../../../../stories/constants';
import { Color, Variant } from '../enums';
import { TStoryBlockCode } from '../../../../../stories/components/StoryBlockCode/types';

const description = [
  'Sometimes you might want to have icons for certain buttons to enhance the UX of the application as we recognize logos more easily than plain text. For example, if you have a delete button you can label it with a dustbin icon.',
];

const blockCodeData: TStoryBlockCode = {
  componentName: 'Button',
  props: [
    {
      attributes: [{ name: 'startIcon', value: 'Send' }],
      children: 'Send',
    },
    {
      attributes: [{ name: 'endIcon', value: 'Trash' }],
      children: 'Remove',
    },
  ],
  imports: [
    {
      items: 'Button',
      path: './shared/ComponentsUI/components/Button/Button',
    },
    {
      items: 'Send',
      path: './assets/icons/send.svg',
    },
    {
      items: 'Trash',
      path: './assets/icons/trash.svg',
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
  title: buttonWithIcon,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <StoryComponent
    blockCodeData={blockCodeData}
    description={description}
    title="Button With Icon"
  >
    <Button startIcon={TrashWhite} variant={Variant.contained} {...args}>
      Delete
    </Button>
    <Button endIcon={Send} variant={Variant.outlined} {...args}>
      Send
    </Button>
  </StoryComponent>
);

export const ButtonWithIcon = Template.bind({});

ButtonWithIcon.argTypes = {
  endIcon: {
    table: {
      disable: true,
    },
  },
  startIcon: {
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

ButtonWithIcon.args = {
  color: Color.primary,
};
