import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useContext } from 'react';

// components
import TextField from '../TextField';
import StoryComponent from '../../../../../stories/components/StoryComponent/StoryComponent';

// core
import { Context } from '../../../../../core/ContextProvider/ContextProvider';

// others
import { ContentGridFlow } from '../../../../../stories/components/StoryComponent/enums';
import { textFieldAdornments } from '../../../../../stories/constants';
import { Theme } from '../../../../../core/ContextProvider/enums';
import { TStoryBlockCode } from '../../../../../stories/components/StoryBlockCode/types';

const description = [
  'The main way is with an <code>StartAdornment</code>, <code>EndAdornment</code>. This can be used to add a prefix, a suffix, or an action to an input. For instance, you can use an icon button to hide or reveal the password.',
];

const blockCodeData: TStoryBlockCode = {
  componentName: 'TextField',
  props: [
    {
      attributes: [
        { name: 'label', value: 'Kg - Start' },
        { name: 'startAdornment', value: 'ReactNode' },
      ],
      children: '',
    },
    {
      attributes: [
        { name: 'endAdornment', value: 'ReactNode' },
        { name: 'label', value: 'Kg - End' },
      ],
      children: '',
    },
    {
      attributes: [
        { name: 'endAdornment', value: 'ReactNode' },
        { name: 'label', value: 'Kg - Start & End' },
        { name: 'startAdornment', value: 'ReactNode' },
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
  title: textFieldAdornments,
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => {
  const { theme } = useContext(Context);
  const color = theme === Theme.dark ? '#ffffff' : '#000000';

  return (
    <StoryComponent
      blockCodeData={blockCodeData}
      contentGridFlow={ContentGridFlow.maxThreeColumns}
      description={description}
      title="Text Field Adornments"
    >
      <TextField
        label="Kg - Start"
        startAdornment={
          <p
            style={{
              alignItems: 'center',
              color,
              display: 'flex',
              height: '24px',
              margin: 0,
              marginRight: '10px',
            }}
          >
            kg
          </p>
        }
        {...args}
      />
      <TextField
        endAdornment={
          <p
            style={{
              alignItems: 'center',
              color,
              display: 'flex',
              height: '24px',
              margin: 0,
              marginLeft: '10px',
            }}
          >
            kg
          </p>
        }
        label="Kg - End"
        {...args}
      />
      <TextField
        endAdornment={
          <p
            style={{
              alignItems: 'center',
              color,
              display: 'flex',
              height: '24px',
              margin: 0,
              marginLeft: '10px',
            }}
          >
            End
          </p>
        }
        label="Kg - Start & End"
        startAdornment={
          <p
            style={{
              alignItems: 'center',
              color,
              display: 'flex',
              height: '24px',
              margin: 0,
              marginRight: '10px',
            }}
          >
            Start
          </p>
        }
        {...args}
      />
    </StoryComponent>
  );
};

export const TextFieldAdornments = Template.bind({});

TextFieldAdornments.argTypes = {
  endAdornment: {
    table: {
      disable: true,
    },
  },
  label: {
    table: {
      disable: true,
    },
  },
  startAdornment: {
    table: {
      disable: true,
    },
  },
};

TextFieldAdornments.args = {};
