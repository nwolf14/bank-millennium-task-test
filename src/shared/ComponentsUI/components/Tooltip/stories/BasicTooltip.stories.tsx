import { ComponentStory, ComponentMeta } from '@storybook/react';

// components
import StoryComponent from '../../../../../stories/components/StoryComponent/StoryComponent';
import Tooltip from '../Tooltip';

// others
import { basicTooltip } from '../../../../../stories/constants';
import { ContentGridFlow } from '../../../../../stories/components/StoryComponent/enums';
import { TooltipPosition } from '../enums';
import { TStoryBlockCode } from '../../../../../stories/components/StoryBlockCode/types';
import { useTheme } from '../../../../../hooks/useTheme/useTheme';
import { Theme } from '../../../../../core/ContextProvider/enums';

const description = [`The <code>Tooltip</code> has 12 placements choice.`];

const blockCodeData: TStoryBlockCode = {
  componentName: 'Tooltip',
  props: [
    {
      attributes: [
        { name: 'content', value: 'tooltip' },
        { name: 'position', value: 'TooltipPosition.topStart' },
      ],
      children: ' TOP-START',
    },
    {
      attributes: [{ name: 'content', value: 'tooltip' }],
      children: ' TOP-CENTER',
    },
    {
      attributes: [
        { name: 'content', value: 'tooltip' },
        { name: 'position', value: 'TooltipPosition.topEnd' },
      ],
      children: ' TOP-END',
    },
    {
      attributes: [
        { name: 'content', value: 'tooltip' },
        { name: 'position', value: 'TooltipPosition.bottomStart' },
      ],
      children: ' BOTTOM-START',
    },
    {
      attributes: [
        { name: 'content', value: 'tooltip' },
        { name: 'position', value: 'TooltipPosition.bottomCenter' },
      ],
      children: ' BOTTOM-CENTER',
    },
    {
      attributes: [
        { name: 'content', value: 'tooltip' },
        { name: 'position', value: 'TooltipPosition.bottomEnd' },
      ],
      children: ' BOTTOM-END',
    },
    {
      attributes: [
        { name: 'content', value: 'tooltip' },
        { name: 'position', value: 'TooltipPosition.leftStart' },
      ],
      children: ' LEFT-START',
    },
    {
      attributes: [
        { name: 'content', value: 'tooltip' },
        { name: 'position', value: 'TooltipPosition.leftCenter' },
      ],
      children: ' LEFT-CENTER',
    },
    {
      attributes: [
        { name: 'content', value: 'tooltip' },
        { name: 'position', value: 'TooltipPosition.leftEnd' },
      ],
      children: ' LEFT-END',
    },

    {
      attributes: [
        { name: 'content', value: 'tooltip' },
        { name: 'position', value: 'TooltipPosition.rightStart' },
      ],
      children: ' RIGHT-START',
    },
    {
      attributes: [
        { name: 'content', value: 'tooltip' },
        { name: 'position', value: 'TooltipPosition.rightCenter' },
      ],
      children: ' RIGHT-CENTER',
    },
    {
      attributes: [
        { name: 'content', value: 'tooltip' },
        { name: 'position', value: 'TooltipPosition.rightEnd' },
      ],
      children: ' RIGHT-END',
    },
  ],
  imports: [
    {
      items: 'Tooltip',
      path: './shared/ComponentsUI/components/Tooltip/Tooltip',
    },
    {
      items: '{ TooltipPosition }',
      path: './shared/ComponentsUI/components/Tooltip/enums',
    },
  ],
};

export default {
  component: Tooltip,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/hVsmArh0s8VYibYYBtChnY/Components---UI?node-id=784%3A17',
    },
  },
  title: basicTooltip,
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => {
  const { theme } = useTheme();

  return (
    <StoryComponent
      blockCodeData={blockCodeData}
      contentGridFlow={ContentGridFlow.row}
      description={description}
      title="Basic Tooltip"
    >
      <div style={{ color: theme === Theme.dark ? 'white' : 'black' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '25px',
          }}
        >
          <Tooltip
            content="Tooltip"
            position={TooltipPosition.topStart}
            style={{ margin: '0 15px' }}
            {...args}
          >
            TOP-START
          </Tooltip>
          <Tooltip content="Tooltip" style={{ margin: '0 15px' }} {...args}>
            TOP-CENTER
          </Tooltip>
          <Tooltip
            content="Tooltip"
            position={TooltipPosition.topEnd}
            style={{ margin: '0 15px' }}
            {...args}
          >
            TOP-END
          </Tooltip>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '25px',
          }}
        >
          <Tooltip
            content="Tooltip"
            position={TooltipPosition.leftStart}
            style={{ marginRight: '200px' }}
            {...args}
          >
            LEFT-START
          </Tooltip>
          <Tooltip
            content="Tooltip"
            position={TooltipPosition.rightStart}
            style={{ marginLeft: '200px' }}
            {...args}
          >
            RIGHT-START
          </Tooltip>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '25px',
          }}
        >
          <Tooltip
            content="Tooltip"
            position={TooltipPosition.leftCenter}
            style={{ marginRight: '200px' }}
            {...args}
          >
            LEFT-CENTER
          </Tooltip>
          <Tooltip
            content="Tooltip"
            position={TooltipPosition.rightCenter}
            style={{ marginLeft: '200px' }}
          >
            RIGHT-CENTER
          </Tooltip>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '25px',
          }}
        >
          <Tooltip
            content="Tooltip"
            position={TooltipPosition.leftEnd}
            style={{ marginRight: '200px' }}
            {...args}
          >
            LEFT-END
          </Tooltip>
          <Tooltip
            content="Tooltip"
            position={TooltipPosition.rightEnd}
            style={{ marginLeft: '200px' }}
            {...args}
          >
            RIGHT-END
          </Tooltip>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '25px',
          }}
        >
          <Tooltip
            content="Tooltip"
            position={TooltipPosition.bottomStart}
            style={{ margin: '0 15px' }}
            {...args}
          >
            BOTTOM-START
          </Tooltip>
          <Tooltip
            content="Tooltip"
            position={TooltipPosition.bottomCenter}
            style={{ margin: '0 15px' }}
            {...args}
          >
            BOTTOM-CENTER
          </Tooltip>
          <Tooltip
            content="Tooltip"
            position={TooltipPosition.bottomEnd}
            style={{ margin: '0 15px' }}
            {...args}
          >
            BOTTOM-END
          </Tooltip>
        </div>
      </div>
    </StoryComponent>
  );
};

export const BasicTooltip = Template.bind({});

BasicTooltip.argTypes = {
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
  position: {
    table: {
      disable: true,
    },
  },
  style: {
    table: {
      disable: true,
    },
  },
};

BasicTooltip.args = {};
