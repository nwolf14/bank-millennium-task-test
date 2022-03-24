import { ComponentStory, ComponentMeta } from '@storybook/react';

// components
import RadioButton from '../../RadioButton/RadioButton';
import RadioButtonGroup from '../RadioButtonGroup';
import StoryComponent from '../../../../../stories/components/StoryComponent/StoryComponent';

// others
import { Margin } from '../../../enums';
import { radioButtonGroupMargin } from '../../../../../stories/constants';
import { TStoryBlockCode } from '../../../../../stories/components/StoryBlockCode/types';

const description = [
  'The <code>margin</code> prop can be used to alter the vertical spacing of the radio button',
];

const blockCodeData: TStoryBlockCode = {
  componentName: 'RadioButtonGroup',
  props: [
    {
      attributes: [
        { name: 'label', value: 'Margin.none' },
        { name: 'margin', value: 'Margin.none' },
        { name: 'name', value: 'radioButton1' },
      ],
      children: [
        {
          componentName: 'RadioButton',
          props: [
            {
              attributes: [
                { name: 'label', value: 'Child 1' },
                { name: 'value', value: '0' },
              ],
            },
          ],
        },
        {
          componentName: 'RadioButton',
          props: [
            {
              attributes: [
                { name: 'label', value: 'Child 2' },
                { name: 'value', value: '1' },
              ],
            },
          ],
        },
        {
          componentName: 'RadioButton',
          props: [
            {
              attributes: [
                { name: 'label', value: 'Child 2' },
                { name: 'value', value: '2' },
              ],
            },
          ],
        },
      ],
    },
    {
      attributes: [
        { name: 'label', value: 'Margin.none' },
        { name: 'margin', value: 'Margin.top' },
        { name: 'name', value: 'radioButton2' },
      ],
      children: [
        {
          componentName: 'RadioButton',
          props: [
            {
              attributes: [
                { name: 'label', value: 'Child 1' },
                { name: 'value', value: '0' },
              ],
            },
          ],
        },
        {
          componentName: 'RadioButton',
          props: [
            {
              attributes: [
                { name: 'label', value: 'Child 2' },
                { name: 'value', value: '1' },
              ],
            },
          ],
        },
        {
          componentName: 'RadioButton',
          props: [
            {
              attributes: [
                { name: 'label', value: 'Child 2' },
                { name: 'value', value: '2' },
              ],
            },
          ],
        },
      ],
    },
    {
      attributes: [
        { name: 'label', value: 'Margin.none' },
        { name: 'name', value: 'radioButton3' },
      ],
      children: [
        {
          componentName: 'RadioButton',
          props: [
            {
              attributes: [
                { name: 'label', value: 'Child 1' },
                { name: 'value', value: '0' },
              ],
            },
          ],
        },
        {
          componentName: 'RadioButton',
          props: [
            {
              attributes: [
                { name: 'label', value: 'Child 2' },
                { name: 'value', value: '1' },
              ],
            },
          ],
        },
        {
          componentName: 'RadioButton',
          props: [
            {
              attributes: [
                { name: 'label', value: 'Child 2' },
                { name: 'value', value: '2' },
              ],
            },
          ],
        },
      ],
    },
    {
      attributes: [
        { name: 'label', value: 'Margin.none' },
        { name: 'margin', value: 'Margin.topBottom' },
        { name: 'name', value: 'radioButton4' },
      ],
      children: [
        {
          componentName: 'RadioButton',
          props: [
            {
              attributes: [
                { name: 'label', value: 'Child 1' },
                { name: 'value', value: '0' },
              ],
            },
          ],
        },
        {
          componentName: 'RadioButton',
          props: [
            {
              attributes: [
                { name: 'label', value: 'Child 2' },
                { name: 'value', value: '1' },
              ],
            },
          ],
        },
        {
          componentName: 'RadioButton',
          props: [
            {
              attributes: [
                { name: 'label', value: 'Child 2' },
                { name: 'value', value: '2' },
              ],
            },
          ],
        },
      ],
    },
  ],
  imports: [
    {
      items: 'RadioButtonGroup',
      path: './shared/ComponentsUI/components/RadioButtonGroup/RadioButtonGroup',
    },
    {
      items: 'RadioButton',
      path: './shared/ComponentsUI/components/RadioButton/RadioButton',
    },
    {
      items: '{ Margin }',
      path: './shared/ComponentsUI/components/enums',
    },
  ],
};

export default {
  component: RadioButtonGroup,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/hVsmArh0s8VYibYYBtChnY/Components---UI?node-id=582%3A22',
    },
  },
  title: radioButtonGroupMargin,
} as ComponentMeta<typeof RadioButtonGroup>;

const Template: ComponentStory<typeof RadioButtonGroup> = (args) => {
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
      title="Radio Button Group Validation"
    >
      {/* Margin.none */}
      <RadioButtonGroup
        label="Margin.none"
        margin={Margin.marginNone}
        name="radioButton1"
        {...args}
      >
        <RadioButton label="Child1" value="0" />
        <RadioButton label="Child2" value="1" />
        <RadioButton label="Child3" value="2" />
      </RadioButtonGroup>

      {/* Margin.marginTop */}
      <Content>
        <Gap style={{ height: '25px' }} />
        <RadioButtonGroup
          label="Margin.marginTop"
          margin={Margin.marginTop}
          name="radioButton2"
          {...args}
        >
          <RadioButton label="Child1" value="0" />
          <RadioButton label="Child2" value="1" />
          <RadioButton label="Child3" value="2" />
        </RadioButtonGroup>
      </Content>

      {/* Margin.marginBottom */}
      <Content>
        <RadioButtonGroup
          label="Margin.marginBottom"
          name="radioButton3"
          {...args}
        >
          <RadioButton label="Child1" value="0" />
          <RadioButton label="Child2" value="1" />
          <RadioButton label="Child3" value="2" />
        </RadioButtonGroup>
        <Gap style={{ bottom: 0, height: '25px' }} />
      </Content>

      {/* Margin.marginTopBottom */}
      <Content>
        <Gap style={{ height: '25px' }} />
        <RadioButtonGroup
          label="Margin.marginTopBottom"
          margin={Margin.marginTopBottom}
          name="radioButton4"
          {...args}
        >
          <RadioButton label="Child1" value="0" />
          <RadioButton label="Child2" value="1" />
          <RadioButton label="Child3" value="2" />
        </RadioButtonGroup>
        <Gap style={{ bottom: 0, height: '25px' }} />
      </Content>
    </StoryComponent>
  );
};

export const RadioButtonGroupMargin = Template.bind({});

RadioButtonGroupMargin.argTypes = {
  errorMessage: {
    table: {
      disable: true,
    },
  },
  label: {
    table: {
      disable: true,
    },
  },
};

RadioButtonGroupMargin.args = {};
