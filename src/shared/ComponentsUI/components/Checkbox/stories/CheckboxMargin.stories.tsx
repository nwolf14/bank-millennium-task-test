import { ComponentStory, ComponentMeta } from '@storybook/react';

// components
import Checkbox from '../Checkbox';
import StoryComponent from '../../../../../stories/components/StoryComponent/StoryComponent';

// others
import { checkboxMargin } from '../../../../../stories/constants';
import { Margin } from '../../../enums';
import { TStoryBlockCode } from '../../../../../stories/components/StoryBlockCode/types';

const description = [
  'The <code>margin</code> prop can be used to alter the vertical spacing of the checkbox.',
];

const blockCodeData: TStoryBlockCode = {
  componentName: 'Checkbox',
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
      items: 'Checkbox',
      path: './shared/ComponentsUI/components/Checkbox/Checkbox',
    },
    {
      items: '{ Margin }',
      path: './shared/ComponentsUI/components/enums',
    },
  ],
};

export default {
  component: Checkbox,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/hVsmArh0s8VYibYYBtChnY/Components---UI?node-id=281%3A2',
    },
  },
  title: checkboxMargin,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => {
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
      title="Checkbox Margin"
    >
      <Checkbox
        margin={Margin.marginNone}
        label="Margin.none"
        value={false}
        {...args}
      />
      <Content>
        <Gap style={{ height: '25px' }} />
        <Checkbox
          margin={Margin.marginTop}
          label="Margin.marginTop"
          value={false}
          {...args}
        />
      </Content>
      <Content>
        <Checkbox label="Margin.marginBottom" value={false} {...args} />
        <Gap style={{ bottom: 0, height: '25px' }} />
      </Content>
      <Content>
        <Gap style={{ height: '25px' }} />
        <Checkbox
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

export const CheckboxMargin = Template.bind({});

CheckboxMargin.argTypes = {
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

CheckboxMargin.args = {};
