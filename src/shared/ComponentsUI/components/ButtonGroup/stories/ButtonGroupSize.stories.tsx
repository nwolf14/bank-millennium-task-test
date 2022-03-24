import { ComponentStory, ComponentMeta } from '@storybook/react';

// components
import Button from '../../Button/Button';
import ButtonGroup from '../ButtonGroup';
import StoryComponent from '../../../../../stories/components/StoryComponent/StoryComponent';

// others
import { buttonGroupSize } from '../../../../../stories/constants';
import { ContentGridFlow } from '../../../../../stories/components/StoryComponent/enums';
import { Numbers } from '../../../../../stories/components/StoryBlockCode/constants';
import { Size } from '../../Button/enums';
import { TStoryBlockCode } from '../../../../../stories/components/StoryBlockCode/types';

const description = [
  'The <code>size</code> prop can be used to control the appearance of the button group.',
];

const blockCodeData: TStoryBlockCode = {
  componentName: 'ButtonGroup',
  props: [
    {
      attributes: [{ name: 'size', value: 'Size.small' }],
      children: Array.from(Array(3), (_, i) => ({
        componentName: 'Button',
        props: [{ children: Numbers[i] }],
      })),
    },
    {
      children: Array.from(Array(3), (_, i) => ({
        componentName: 'Button',
        props: [{ children: Numbers[i] }],
      })),
    },
    {
      attributes: [{ name: 'size', value: 'Size.large' }],
      children: Array.from(Array(3), (_, i) => ({
        componentName: 'Button',
        props: [{ children: Numbers[i] }],
      })),
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
    {
      items: '{ Size }',
      path: './shared/ComponentsUI/components/Button/enums',
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
  title: buttonGroupSize,
} as ComponentMeta<typeof ButtonGroup>;

const Template: ComponentStory<typeof ButtonGroup> = (args) => (
  <StoryComponent
    blockCodeData={blockCodeData}
    contentGridFlow={ContentGridFlow.row}
    description={description}
    title="Button Group Sizes"
  >
    {Object.keys(Size).map((size, key) => (
      // @ts-ignore
      <ButtonGroup size={size} key={key} {...args}>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    ))}
  </StoryComponent>
);

export const ButtonGroupSize = Template.bind({});

ButtonGroupSize.argTypes = {
  size: {
    table: {
      disable: true,
    },
  },
};

ButtonGroupSize.args = {};
