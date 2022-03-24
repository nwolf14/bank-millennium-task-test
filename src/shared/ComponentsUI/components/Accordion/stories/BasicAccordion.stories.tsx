import { ComponentStory, ComponentMeta } from '@storybook/react';

// components
import Accordion from '../Accordion';
import StoryComponent from '../../../../../stories/components/StoryComponent/StoryComponent';

// others
import { basicAccordion } from '../../../../../stories/constants';
import { TStoryBlockCode } from '../../../../../stories/components/StoryBlockCode/types';
import { useTheme } from '../../../../../hooks/useTheme/useTheme';
import { Theme } from '../../../../../core/ContextProvider/enums';

const description = [
  `An accordion is a lightweight container that may either be used standalone, or be connected to a larger surface, such as a card.`,
];

const blockCodeData: TStoryBlockCode = {
  componentName: 'Tooltip',
  props: [
    {
      attributes: [{ name: 'header', value: 'Accordion (1)' }],
      children: 'Some long text...',
    },
    {
      attributes: [{ name: 'header', value: 'Accordion (2)' }],
      children: 'Some long text...',
    },
    {
      attributes: [{ name: 'header', value: 'Accordion (3)' }],
      children: 'Some long text...',
    },
  ],
  imports: [
    {
      items: 'Accordion',
      path: './shared/ComponentsUI/components/Accordion/Accordion',
    },
  ],
};

export default {
  component: Accordion,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/hVsmArh0s8VYibYYBtChnY/Components---UI?node-id=805%3A18',
    },
  },
  title: basicAccordion,
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => {
  const { theme } = useTheme();

  return (
    <StoryComponent
      blockCodeData={blockCodeData}
      description={description}
      title="Basic Accordion"
    >
      <div
        style={{
          backgroundColor: theme === Theme.dark ? '#444444' : '#F1F2F6',
          maxWidth: '400px',
        }}
      >
        <Accordion {...args} header="Accordion (1)">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Accordion>
        <Accordion {...args} header="Accordion (2)">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Accordion>
        <Accordion {...args} header="Accordion (3)">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Accordion>
      </div>
    </StoryComponent>
  );
};

export const BasicAccordion = Template.bind({});

BasicAccordion.argTypes = {
  children: {
    table: {
      disable: true,
    },
  },
  content: {
    table: {
      disable: true,
    },
  },
  header: {
    table: {
      disable: true,
    },
  },
};

BasicAccordion.args = {};
