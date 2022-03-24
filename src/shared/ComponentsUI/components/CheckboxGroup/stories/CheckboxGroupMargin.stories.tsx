import { ComponentStory, ComponentMeta } from '@storybook/react';

// components
import Checkbox from '../../Checkbox/Checkbox';
import CheckboxGroup from '../CheckboxGroup';
import StoryComponent from '../../../../../stories/components/StoryComponent/StoryComponent';

// others
import { checkboxGroupMargin } from '../../../../../stories/constants';
import { TStoryBlockCode } from '../../../../../stories/components/StoryBlockCode/types';
import { Margin } from '../../../enums';

const description = [
  'The <code>margin</code> prop can be used to alter the vertical spacing of the checkbox',
];

const blockCodeData: TStoryBlockCode = {
  componentName: 'CheckboxGroup',
  props: [
    {
      attributes: [
        { name: 'label', value: 'Margin.none' },
        { name: 'margin', value: 'Margin.none' },
      ],
      children: [
        {
          componentName: 'Checkbox',
          props: [
            {
              attributes: [
                { name: 'errorMessage', value: 'Required' },
                { name: 'label', value: 'Child 1' },
              ],
            },
          ],
        },
        {
          componentName: 'Checkbox',
          props: [
            {
              attributes: [
                { name: 'errorMessage', value: 'Required' },
                { name: 'label', value: 'Child 2' },
              ],
            },
          ],
        },
        {
          componentName: 'Checkbox',
          props: [
            {
              attributes: [
                { name: 'errorMessage', value: 'Required' },
                { name: 'label', value: 'Child 3' },
              ],
            },
          ],
        },
      ],
    },
    {
      attributes: [
        { name: 'label', value: 'Margin.top' },
        { name: 'margin', value: 'Margin.top' },
      ],
      children: [
        {
          componentName: 'Checkbox',
          props: [
            {
              attributes: [
                { name: 'errorMessage', value: 'Required' },
                { name: 'label', value: 'Child 1' },
              ],
            },
          ],
        },
        {
          componentName: 'Checkbox',
          props: [
            {
              attributes: [
                { name: 'errorMessage', value: 'Required' },
                { name: 'label', value: 'Child 2' },
              ],
            },
          ],
        },
        {
          componentName: 'Checkbox',
          props: [
            {
              attributes: [
                { name: 'errorMessage', value: 'Required' },
                { name: 'label', value: 'Child 3' },
              ],
            },
          ],
        },
      ],
    },
    {
      attributes: [{ name: 'label', value: 'Margin.bottom' }],
      children: [
        {
          componentName: 'Checkbox',
          props: [
            {
              attributes: [
                { name: 'errorMessage', value: 'Required' },
                { name: 'label', value: 'Child 1' },
              ],
            },
          ],
        },
        {
          componentName: 'Checkbox',
          props: [
            {
              attributes: [
                { name: 'errorMessage', value: 'Required' },
                { name: 'label', value: 'Child 2' },
              ],
            },
          ],
        },
        {
          componentName: 'Checkbox',
          props: [
            {
              attributes: [
                { name: 'errorMessage', value: 'Required' },
                { name: 'label', value: 'Child 3' },
              ],
            },
          ],
        },
      ],
    },
    {
      attributes: [
        { name: 'label', value: 'Margin.topBottom' },
        { name: 'margin', value: 'Margin.topBottom' },
      ],
      children: [
        {
          componentName: 'Checkbox',
          props: [
            {
              attributes: [
                { name: 'errorMessage', value: 'Required' },
                { name: 'label', value: 'Child 1' },
              ],
            },
          ],
        },
        {
          componentName: 'Checkbox',
          props: [
            {
              attributes: [
                { name: 'errorMessage', value: 'Required' },
                { name: 'label', value: 'Child 2' },
              ],
            },
          ],
        },
        {
          componentName: 'Checkbox',
          props: [
            {
              attributes: [
                { name: 'errorMessage', value: 'Required' },
                { name: 'label', value: 'Child 3' },
              ],
            },
          ],
        },
      ],
    },
  ],
  imports: [
    {
      items: 'CheckboxGroup',
      path: './shared/ComponentsUI/components/CheckboxGroup/CheckboxGroup',
    },
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
  component: CheckboxGroup,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/hVsmArh0s8VYibYYBtChnY/Components---UI?node-id=318%3A183',
    },
  },
  title: checkboxGroupMargin,
} as ComponentMeta<typeof CheckboxGroup>;

const Template: ComponentStory<typeof CheckboxGroup> = (args) => {
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
      title="Checkbox Group Margin"
    >
      {/* Margin.none */}
      <CheckboxGroup margin={Margin.marginNone} label="Margin.none" {...args}>
        <Checkbox label="Child 1" />
        <Checkbox label="Child 2" />
        <Checkbox label="Child 3" />
      </CheckboxGroup>

      {/* Margin.marginTop */}
      <Content>
        <Gap style={{ height: '25px' }} />
        <CheckboxGroup
          margin={Margin.marginTop}
          label="Margin.marginTop"
          {...args}
        >
          <Checkbox label="Child 1" />
          <Checkbox label="Child 2" />
          <Checkbox label="Child 3" />
        </CheckboxGroup>
      </Content>

      {/* Margin.marginBottom */}
      <Content>
        <CheckboxGroup label="Margin.marginBottom" {...args}>
          <Checkbox label="Child 1" />
          <Checkbox label="Child 2" />
          <Checkbox label="Child 3" />
        </CheckboxGroup>
        <Gap style={{ bottom: 0, height: '25px' }} />
      </Content>

      {/* Margin.marginTopBottom */}
      <Content>
        <Gap style={{ height: '25px' }} />
        <CheckboxGroup
          margin={Margin.marginTopBottom}
          label="Margin.marginTopBottom"
          {...args}
        >
          <Checkbox label="Child 1" />
          <Checkbox label="Child 2" />
          <Checkbox label="Child 3" />
        </CheckboxGroup>
        <Gap style={{ bottom: 0, height: '25px' }} />
      </Content>
    </StoryComponent>
  );
};

export const CheckboxGroupMargin = Template.bind({});

CheckboxGroupMargin.argTypes = {
  margin: {
    table: {
      disable: true,
    },
  },
  onChange: {
    table: {
      disable: true,
    },
  },
};

CheckboxGroupMargin.args = {};
