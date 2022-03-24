import { ComponentStory, ComponentMeta } from '@storybook/react';

// components
import Button from '../Button';
import StoryComponent from '../../../../../stories/components/StoryComponent/StoryComponent';

// others
import { buttonHandlingClicks } from '../../../../../stories/constants';
import { TStoryBlockCode } from '../../../../../stories/components/StoryBlockCode/types';

const description = [
  'All components accept an <code>onClick</code> handler that is applied to the root DOM element.',
];

const blockCodeData: TStoryBlockCode = {
  componentName: 'Button',
  props: [
    {
      attributes: [{ name: 'onClick', value: `{() => alert('clicked')}` }],
      children: 'Click me',
    },
  ],
  imports: [
    {
      items: 'Button',
      path: './shared/ComponentsUI/components/Button/Button',
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
  title: buttonHandlingClicks,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = () => (
  <StoryComponent
    blockCodeData={blockCodeData}
    description={description}
    title="Button Handling Clicks"
  >
    <Button onClick={() => alert('clicked')}>Click</Button>
  </StoryComponent>
);

export const ButtonHandlingClicks = Template.bind({});
