import { ComponentStory, ComponentMeta } from '@storybook/react';

// components
import Button from '../../Button/Button';
import ButtonGroup from '../ButtonGroup';
import StoryComponent from '../../../../../stories/components/StoryComponent/StoryComponent';

// others
import { basicButtonGroup } from '../../../../../stories/constants';
import { ContentGridFlow } from '../../../../../stories/components/StoryComponent/enums';
import { TStoryBlockCode } from '../../../../../stories/components/StoryBlockCode/types';

const description = [
  'The ButtonGroup component can be used to group related buttons.',
];

const blockCodeData: TStoryBlockCode = {
  componentName: 'ButtonGroup',
  props: [
    {
      children: Array.from(Array(3), () => ({ componentName: 'Button' })),
    },
    {
      attributes: [{ name: 'forcedHover' }],
      children: Array.from(Array(3), () => ({ componentName: 'Button' })),
    },
    {
      attributes: [{ name: 'disabled' }],
      children: Array.from(Array(3), () => ({ componentName: 'Button' })),
    },
  ],
  imports: [
    {
      items: 'ButtonGroup',
      path: './shared/ComponentsUI/components/ButtonGroup/ButtonGroup',
    },
    {
      items: 'Button',
      path: './shared/ComponentsUI/components/Button/Button',
    },
  ],
};

export default {
  component: ButtonGroup,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/hVsmArh0s8VYibYYBtChnY/Components---UI?node-id=232%3A2',
    },
  },
  title: basicButtonGroup,
} as ComponentMeta<typeof ButtonGroup>;

const Template: ComponentStory<typeof ButtonGroup> = (args) => (
  <StoryComponent
    blockCodeData={blockCodeData}
    contentGridFlow={ContentGridFlow.row}
    description={description}
    title="Basic Button Group"
  >
    <ButtonGroup {...args}>
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
    <ButtonGroup forcedHover {...args}>
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
    <ButtonGroup disabled {...args}>
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
  </StoryComponent>
);

export const BasicButtonGroup = Template.bind({});

BasicButtonGroup.argTypes = {
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
};

BasicButtonGroup.args = {};
