import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';

// components
import Accordion from '../Accordion';
import StoryComponent from '../../../../../stories/components/StoryComponent/StoryComponent';

// others
import { accordionControlled } from '../../../../../stories/constants';
import { TStoryBlockCode } from '../../../../../stories/components/StoryBlockCode/types';
import { useTheme } from '../../../../../hooks/useTheme/useTheme';
import { Theme } from '../../../../../core/ContextProvider/enums';

const description = [
  `Extend the default behavior to create an accordion with the <code>Accordion</code> component.`,
];

const blockCodeData: TStoryBlockCode = {
  componentName: 'Tooltip',
  props: [
    {
      attributes: [
        { name: 'expanded', value: 'false' },
        { name: 'header', value: 'Accordion' },
        { name: 'onClick', value: 'setExpanded' },
      ],
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
  title: accordionControlled,
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => {
  const [expanded, setExpanded] = useState(false);
  const { theme } = useTheme();

  return (
    <StoryComponent
      blockCodeData={blockCodeData}
      description={description}
      title="Accordion Controlled"
    >
      <div
        style={{
          backgroundColor: theme === Theme.dark ? '#444444' : '#F1F2F6',
          maxWidth: '400px',
        }}
      >
        <Accordion
          {...args}
          expanded={expanded}
          header="Accordion"
          onClick={setExpanded}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Accordion>
      </div>
    </StoryComponent>
  );
};

export const AccordionControlled = Template.bind({});

AccordionControlled.argTypes = {
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
  expanded: {
    table: {
      disable: true,
    },
  },
  header: {
    table: {
      disable: true,
    },
  },
  onClick: {
    table: {
      disable: true,
    },
  },
};

AccordionControlled.args = {};
