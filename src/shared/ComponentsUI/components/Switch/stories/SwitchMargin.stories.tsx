import { ComponentStory, ComponentMeta } from '@storybook/react';

// components
import StoryComponent from '../../../../../stories/components/StoryComponent/StoryComponent';
import Switch from '../Switch';

// others
import { switchMargin } from '../../../../../stories/constants';
import { Margin } from '../../../enums';
import { TStoryBlockCode } from '../../../../../stories/components/StoryBlockCode/types';

const description = [
  'The <code>margin</code> prop can be used to alter the vertical spacing of the switch.',
];

const blockCodeData: TStoryBlockCode = {
  componentName: 'Switch',
  props: [
    {
      attributes: [
        { name: 'label', value: 'Margin.none' },
        { name: 'margin', value: 'Margin.none' },
        { name: 'value', value: 'false' },
      ],
      children: '',
    },
    {
      attributes: [
        { name: 'label', value: 'Margin.top' },
        { name: 'margin', value: 'Margin.top' },
        { name: 'value', value: 'false' },
      ],
      children: '',
    },
    {
      attributes: [{ name: 'value', value: 'false' }],
      children: '',
    },
    {
      attributes: [
        { name: 'label', value: 'Margin.topBottom' },
        { name: 'margin', value: 'Margin.topBottom' },
        { name: 'value', value: 'false' },
      ],
      children: '',
    },
  ],
  imports: [
    {
      items: 'Switch',
      path: './shared/ComponentsUI/components/Switch/Switch',
    },
    {
      items: '{ Margin }',
      path: './shared/ComponentsUI/components/enums',
    },
  ],
};

export default {
  component: Switch,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/hVsmArh0s8VYibYYBtChnY/Components---UI?node-id=758%3A17',
    },
  },
  title: switchMargin,
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => {
  const Content = ({ children }: any): JSX.Element => (
    <div style={{ position: 'relative' }}>{children}</div>
  );

  const Gap = ({ style = {} }): JSX.Element => (
    <div
      style={{
        backgroundColor: '#ff848440',
        position: 'absolute',
        width: '100%',
        ...style,
      }}
    ></div>
  );

  return (
    <StoryComponent
      blockCodeData={blockCodeData}
      description={description}
      title="Switch Margin"
    >
      <Switch
        margin={Margin.marginNone}
        label="Margin.none"
        value={false}
        {...args}
      />
      <Content>
        <Gap style={{ height: '25px' }} />
        <Switch
          margin={Margin.marginTop}
          label="Margin.marginTop"
          value={false}
          {...args}
        />
      </Content>
      <Content>
        <Switch label="Margin.marginBottom" value={false} {...args} />
        <Gap style={{ bottom: 0, height: '25px' }} />
      </Content>
      <Content>
        <Gap style={{ height: '25px' }} />
        <Switch
          margin={Margin.marginTopBottom}
          label="Margin.marginTopBottom"
          value={false}
          {...args}
        />
        <Gap style={{ bottom: 0, height: '25px' }} />
      </Content>
    </StoryComponent>
  );
};

export const SwitchMargin = Template.bind({});

SwitchMargin.argTypes = {
  label: {
    table: {
      disable: true,
    },
  },
  margin: {
    table: {
      disable: true,
    },
  },
  value: {
    table: {
      disable: true,
    },
  },
};

SwitchMargin.args = {};
