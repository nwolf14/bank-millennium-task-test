import { ComponentStory, ComponentMeta } from '@storybook/react';

// components
import Select from '../Select';
import SelectItem from '../components/SelectItem/SelectItem';
import StoryComponent from '../../../../../stories/components/StoryComponent/StoryComponent';

// others
import { Margin } from '../../../enums';
import { selectMargin } from '../../../../../stories/constants';
import { TStoryBlockCode } from '../../../../../stories/components/StoryBlockCode/types';

const description = [
  'The <code>errorMessage</code> prop toggles the error state.',
];

const blockCodeData: TStoryBlockCode = {
  componentName: 'Select',
  props: [
    {
      attributes: [
        { name: 'label', value: 'Margin.none' },
        { name: 'margin', value: 'Margin.none' },
        { name: 'readOnly' },
      ],
      children: [
        {
          componentName: 'SelectItem',
          props: [
            {
              attributes: [{ name: 'value', value: 'item1' }],
              children: 'item 1',
            },
          ],
        },
        {
          componentName: 'SelectItem',
          props: [
            {
              attributes: [{ name: 'value', value: 'item2' }],
              children: 'item 2',
            },
          ],
        },
      ],
    },
    {
      attributes: [
        { name: 'label', value: 'Margin.top' },
        { name: 'margin', value: 'Margin.top' },
        { name: 'readOnly' },
      ],
      children: [
        {
          componentName: 'SelectItem',
          props: [
            {
              attributes: [{ name: 'value', value: 'item1' }],
              children: 'item 1',
            },
          ],
        },
        {
          componentName: 'SelectItem',
          props: [
            {
              attributes: [{ name: 'value', value: 'item2' }],
              children: 'item 2',
            },
          ],
        },
      ],
    },
    {
      attributes: [
        { name: 'label', value: 'Margin.bottom' },
        { name: 'readOnly' },
      ],
      children: [
        {
          componentName: 'SelectItem',
          props: [
            {
              attributes: [{ name: 'value', value: 'item1' }],
              children: 'item 1',
            },
          ],
        },
        {
          componentName: 'SelectItem',
          props: [
            {
              attributes: [{ name: 'value', value: 'item2' }],
              children: 'item 2',
            },
          ],
        },
      ],
    },
    {
      attributes: [
        { name: 'label', value: 'Margin.topBottom' },
        { name: 'margin', value: 'Margin.topBottom' },
        { name: 'readOnly' },
      ],
      children: [
        {
          componentName: 'SelectItem',
          props: [
            {
              attributes: [{ name: 'value', value: 'item1' }],
              children: 'item 1',
            },
          ],
        },
        {
          componentName: 'SelectItem',
          props: [
            {
              attributes: [{ name: 'value', value: 'item2' }],
              children: 'item 2',
            },
          ],
        },
      ],
    },
  ],
  imports: [
    {
      items: 'Select',
      path: './shared/ComponentsUI/components/Select/Select',
    },
    {
      items: 'SelectItem',
      path: './shared/ComponentsUI/components/Select/components/SelectItem/SelectItem',
    },
    {
      items: '{ Margin }',
      path: './shared/ComponentsUI/components/enums',
    },
  ],
};

export default {
  component: Select,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/hVsmArh0s8VYibYYBtChnY/Components---UI?node-id=633%3A19',
    },
  },
  title: selectMargin,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => {
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
      title="Select Margin"
    >
      {/* Margin.none */}
      <Select margin={Margin.marginNone} label="Margin.none" readOnly {...args}>
        <SelectItem value="item1">item 1</SelectItem>
        <SelectItem value="item2">item 2</SelectItem>
      </Select>

      {/* Margin.marginTop */}
      <Content>
        <Gap style={{ height: '25px' }} />
        <Select
          margin={Margin.marginTop}
          label="Margin.marginTop"
          readOnly
          {...args}
        >
          <SelectItem value="item1">item 1</SelectItem>
          <SelectItem value="item2">item 2</SelectItem>
        </Select>
      </Content>

      {/* Margin.marginBottom */}
      <Content>
        <Select label="Margin.marginBottom" readOnly {...args}>
          <SelectItem value="item1">item 1</SelectItem>
          <SelectItem value="item2">item 2</SelectItem>
        </Select>
        <Gap style={{ bottom: 0, height: '25px' }} />
      </Content>

      {/* Margin.marginTopBottom */}
      <Content>
        <Gap style={{ height: '25px' }} />
        <Select
          margin={Margin.marginTopBottom}
          label="Margin.marginTopBottom"
          readOnly
          {...args}
        >
          <SelectItem value="item1">item 1</SelectItem>
          <SelectItem value="item2">item 2</SelectItem>
        </Select>
        <Gap style={{ bottom: 0, height: '25px' }} />
      </Content>
    </StoryComponent>
  );
};

export const SelectMargin = Template.bind({});

SelectMargin.argTypes = {};

SelectMargin.args = {};
