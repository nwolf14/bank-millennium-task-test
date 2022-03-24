import { ComponentStory, ComponentMeta } from '@storybook/react';

// components
import StoryComponent from '../../../../../stories/components/StoryComponent/StoryComponent';
import Typography from '../Typography';

// others
import { basicTypography } from '../../../../../stories/constants';
import { ContentGridFlow } from '../../../../../stories/components/StoryComponent/enums';
import { TStoryBlockCode } from '../../../../../stories/components/StoryBlockCode/types';
import { Variant } from '../enums';

const description = [
  'Use typography to present your design and content as clearly and efficiently as possible.',
];

const blockCodeData: TStoryBlockCode = {
  componentName: 'Typography',
  props: [
    {
      attributes: [{ name: 'variant', value: 'Variant.h1' }],
      children: 'h1. Heading',
    },
    {
      attributes: [{ name: 'variant', value: 'Variant.h2' }],
      children: 'h. Heading',
    },
    {
      attributes: [{ name: 'variant', value: 'Variant.h3' }],
      children: 'h3. Heading',
    },
    {
      attributes: [{ name: 'variant', value: 'Variant.h4' }],
      children: 'h4. Heading',
    },
    {
      attributes: [{ name: 'variant', value: 'Variant.h5' }],
      children: 'h5. Heading',
    },
    {
      attributes: [{ name: 'variant', value: 'Variant.h6' }],
      children: 'h6. Heading',
    },
    {
      attributes: [{ name: 'variant', value: 'Variant.text' }],
      children: 'Text',
    },
    {
      attributes: [{ name: 'variant', value: 'Variant.smallText' }],
      children: 'Small Text',
    },
  ],
  imports: [
    {
      items: 'Typography',
      path: './shared/ComponentsUI/components/Typography/Typography',
    },
    {
      items: '{ Variant }',
      path: './shared/ComponentsUI/components/Typography/enums',
    },
  ],
};

export default {
  component: Typography,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/hVsmArh0s8VYibYYBtChnY/Components---UI?node-id=718%3A21',
    },
  },
  title: basicTypography,
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = () => (
  <StoryComponent
    blockCodeData={blockCodeData}
    contentGridFlow={ContentGridFlow.row}
    description={description}
    title="Basic Typography"
  >
    <Typography variant={Variant.h1}>h1. Heading</Typography>
    <Typography variant={Variant.h2}>h2. Heading</Typography>
    <Typography variant={Variant.h3}>h3. Heading</Typography>
    <Typography variant={Variant.h4}>h4. Heading</Typography>
    <Typography variant={Variant.h5}>h5. Heading</Typography>
    <Typography variant={Variant.h6}>h6. Heading</Typography>
    <Typography>Text</Typography>
    <Typography variant={Variant.smallText}>Small Text</Typography>
  </StoryComponent>
);

export const BasicTypography = Template.bind({});

BasicTypography.argTypes = {};

BasicTypography.args = {};
