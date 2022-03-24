import { ComponentStory, ComponentMeta } from '@storybook/react';

// components
import TextField from '../TextField';
import StoryComponent from '../../../../../stories/components/StoryComponent/StoryComponent';

// others
import { ContentAlignItems } from '../../../../../stories/components/StoryComponent/enums';
import { Margin } from '../../../enums';
import { textFieldMargin } from '../../../../../stories/constants';
import { TStoryBlockCode } from '../../../../../stories/components/StoryBlockCode/types';

const description = [
  `The <code>margin</code> prop can be used to alter the vertical spacing of the text field.`,
];

const blockCodeData: TStoryBlockCode = {
  componentName: 'TextField',
  props: [
    {
      attributes: [
        { name: 'label', value: 'Margin.none' },
        { name: 'margin', value: 'Margin.none' },
        { name: 'readOnly' },
      ],
      children: '',
    },
    {
      attributes: [
        { name: 'label', value: 'Margin.top' },
        { name: 'margin', value: 'Margin.top' },
        { name: 'readOnly' },
      ],
      children: '',
    },
    {
      attributes: [
        { name: 'label', value: 'Margin.bottom' },
        { name: 'readOnly' },
      ],
      children: '',
    },
    {
      attributes: [
        { name: 'label', value: 'Margin.topBottom' },
        { name: 'margin', value: 'Margin.topBottom' },
        { name: 'readOnly' },
      ],
      children: '',
    },
  ],
  imports: [
    {
      items: 'TextField',
      path: './shared/ComponentsUI/components/TextField/TextField',
    },
  ],
};

export default {
  component: TextField,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/hVsmArh0s8VYibYYBtChnY/Components---UI?node-id=592%3A17',
    },
  },
  title: textFieldMargin,
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => {
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
      contentAlignItems={ContentAlignItems.top}
      description={description}
      title="Text Field Margin"
    >
      <TextField
        label="Margin.none"
        margin={Margin.marginNone}
        readOnly
        {...args}
      />
      <Content>
        <Gap style={{ height: '25px' }} />
        <TextField
          label="Margin.marginTop"
          margin={Margin.marginTop}
          readOnly
          {...args}
        />
      </Content>
      <Content>
        <TextField label="Margin.marginBottom" readOnly {...args} />
        <Gap style={{ bottom: 0, height: '25px' }} />
      </Content>
      <Content>
        <Gap style={{ height: '25px' }} />
        <TextField
          label="Margin.marginTopBottom"
          margin={Margin.marginTopBottom}
          readOnly
          {...args}
        />
        <Gap style={{ bottom: 0, height: '25px' }} />
      </Content>
    </StoryComponent>
  );
};

export const TextFieldMargin = Template.bind({});

TextFieldMargin.argTypes = {
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
  size: {
    table: {
      disable: true,
    },
  },
};

TextFieldMargin.args = {};
