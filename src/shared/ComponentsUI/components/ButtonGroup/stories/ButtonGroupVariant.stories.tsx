import { ComponentStory, ComponentMeta } from '@storybook/react';

// components
import Button from '../../Button/Button';
import ButtonGroup from '../ButtonGroup';
import StoryComponent from '../../../../../stories/components/StoryComponent/StoryComponent';

// others
import { buttonGroupVariants } from '../../../../../stories/constants';
import { ContentGridFlow } from '../../../../../stories/components/StoryComponent/enums';
import { Numbers } from '../../../../../stories/components/StoryBlockCode/constants';
import { TStoryBlockCode } from '../../../../../stories/components/StoryBlockCode/types';
import { Variant } from '../../Button/enums';

const description = ['All the standard button variants are supported.'];

const blockCodeData: TStoryBlockCode = {
  componentName: 'ButtonGroup',
  props: [
    {
      attributes: [{ name: 'variant', value: 'Variant.text' }],
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
      attributes: [{ name: 'variant', value: 'Variant.outlined' }],
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
      items: '{ Variant }',
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
  title: buttonGroupVariants,
} as ComponentMeta<typeof ButtonGroup>;

const Template: ComponentStory<typeof ButtonGroup> = (args) => (
  <StoryComponent
    blockCodeData={blockCodeData}
    contentGridFlow={ContentGridFlow.row}
    description={description}
    title="Button Group Variants"
  >
    {Object.keys(Variant).map((variant, key) => (
      // @ts-ignore
      <ButtonGroup key={key} variant={variant} {...args}>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    ))}
  </StoryComponent>
);

export const ButtonGroupVariants = Template.bind({});

ButtonGroupVariants.argTypes = {
  variant: {
    table: {
      disable: true,
    },
  },
};

ButtonGroupVariants.args = {};
