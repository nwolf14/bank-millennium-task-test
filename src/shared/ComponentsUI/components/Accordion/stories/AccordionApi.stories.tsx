import { ComponentStory, ComponentMeta } from '@storybook/react';

// components
import Accordion from '../Accordion';
import StoryApi from '../../../../../stories/components/StoryApi/StoryApi';

// others
import { accordionAPI } from '../../../../../stories/constants';
import { TStoryBlockCode } from '../../../../../stories/components/StoryBlockCode/types';
import { TTableBody } from '../../../../../stories/components/StoryPropsTable/types';

const description = [
  'API documentation for the React Accordion component. Learn about the available props.',
];

const tableBodyData: Array<TTableBody> = [
  {
    name: 'children',
    type: 'node',
    description: 'The content of the component.',
  },
  {
    name: 'className',
    type: 'string',
    description: 'Override or extend the styles applied to the component.',
  },
  {
    name: 'classNameContent',
    type: 'string',
    description: 'Override or extend the styles applied to the content.',
  },
  {
    name: 'classNameHeader',
    type: 'string',
    description: 'Override or extend the styles applied to the header.',
  },
  {
    name: 'classNameWrapper',
    type: 'string',
    description: 'Override or extend the styles applied to the wrapper.',
  },
  {
    name: 'defaultExpanded',
    type: 'boolean',
    defaultValue: 'false',
    description:
      'The default expanded state. Use when the component is not controlled.',
  },
  {
    name: 'expanded',
    type: 'boolean',
    defaultValue: 'false',
    description: 'If true, the component is <code>expanded</code>.',
  },
  {
    name: 'header',
    type: 'string',
    description: 'Main description.',
  },
  {
    name: 'onChange',
    type: '(expanded: boolean) => void',
    description:
      '<code>Function</code> to call action after the click accordion.',
  },
  {
    name: 'style',
    type: 'object',
    description: 'Override styles by object of styles.',
  },
];

const blockCodeData: TStoryBlockCode = {
  imports: [
    {
      items: 'Accordion',
      path: './shared/ComponentsUI/components/Accordion/Accordion',
    },
  ],
};

export default {
  component: Accordion,
  title: accordionAPI,
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = () => (
  <StoryApi
    blockCodeData={blockCodeData}
    description={description}
    tableBodyData={tableBodyData}
    title="Accordion API"
  />
);

export const AccordionAPI = Template.bind({});
