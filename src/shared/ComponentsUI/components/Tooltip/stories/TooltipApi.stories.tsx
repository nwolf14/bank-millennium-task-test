import { ComponentStory, ComponentMeta } from '@storybook/react';

// components
import StoryApi from '../../../../../stories/components/StoryApi/StoryApi';
import Tooltip from '../Tooltip';

// others
import { tooltipAPI } from '../../../../../stories/constants';
import { TStoryBlockCode } from '../../../../../stories/components/StoryBlockCode/types';
import { TTableBody } from '../../../../../stories/components/StoryPropsTable/types';

const description = [
  'API documentation for the React Checkbox component. Learn about the available props.',
];

const tableBodyData: Array<TTableBody> = [
  {
    name: 'autoPositioning',
    type: 'boolean',
    description:
      'If true then tooltip will be adjust dependly on cursor position relative to screen.',
  },
  {
    name: 'autoPositioningHorizontal',
    type: 'boolean',
    description: 'Auto positioning relative to horizontal.',
  },
  {
    name: 'autoPositioningPlacement',
    type: `'Center'<br/>|&nbsp;'Start'<br/>|&nbsp;'Center'<br/>|&nbsp;'End'<br/>|&nbsp;'string'`,
    description: 'Placement for arrow during auto positioning.',
  },
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
    name: 'content',
    type: 'string',
    description: 'Content included inside the tooltip.',
  },
  {
    name: 'classNameInput',
    type: 'string',
    description: 'Override or extend the styles applied to the Input.',
  },
  {
    name: 'position',
    type: `'top-center'<br/>|&nbsp;'top-start'<br/>|&nbsp;'top-center'<br/>|&nbsp;'top-end'<br/>|&nbsp;'bottom-start'<br/>|&nbsp;'bottom-center'<br/>|&nbsp;'bottom-end'<br/>|&nbsp;'left-start'<br/>|&nbsp;'left-center'<br/>|&nbsp;'left-end'<br/>|&nbsp;'right-start'<br/>|&nbsp;'right-center'<br/>|&nbsp;'right-end'<br/>|&nbsp;'string'`,
    defaultValue: 'top-center',
    description: 'Tooltip position.',
  },
  {
    name: 'style',
    type: 'object',
    description: 'Override styles by object of styles.',
  },
  {
    name: 'visible',
    type: 'bool',
    defaultValue: 'false',
    description: 'If true, the component is <code>visible</code>.',
  },
];

const blockCodeData: TStoryBlockCode = {
  imports: [
    {
      items: 'Tooltip',
      path: './shared/ComponentsUI/components/Tooltip/Tooltip',
    },
  ],
};

export default {
  component: Tooltip,
  title: tooltipAPI,
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = () => (
  <StoryApi
    blockCodeData={blockCodeData}
    description={description}
    tableBodyData={tableBodyData}
    title="Tooltip API"
  />
);

export const TooltipAPI = Template.bind({});
