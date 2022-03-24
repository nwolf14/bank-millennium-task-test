import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useContext } from 'react';

// components
import ButtonIcon from '../ButtonIcon';
import StoryComponent from '../../../../../stories/components/StoryComponent/StoryComponent';

// core
import { Context } from '../../../../../core/ContextProvider/ContextProvider';

// others
import { basicButtonIcon } from '../../../../../stories/constants';
import { ReactComponent as Trash } from '../../../../../stories/assets/icons/trash.svg';
import { Theme } from '../../../../../core/ContextProvider/enums';
import { TStoryBlockCode } from '../../../../../stories/components/StoryBlockCode/types';

const description = [
  'Icon buttons are commonly found in app bars and toolbars.',
  'Icons are also appropriate for toggle buttons that allow a single choice to be selected or deselected, such as adding or removing a star to an item.',
];

const blockCodeData: TStoryBlockCode = {
  componentName: 'ButtonIcon',
  props: [
    {
      children: [
        {
          componentName: 'Trash',
          props: [
            {
              attributes: [{ name: 'style', value: '{style}' }],
            },
          ],
        },
      ],
    },
    {
      attributes: [{ name: 'forcedHover' }],
      children: [
        {
          componentName: 'Trash',
          props: [
            {
              attributes: [{ name: 'style', value: '{style}' }],
            },
          ],
        },
      ],
    },
    {
      attributes: [{ name: 'disabled' }],
      children: [
        {
          componentName: 'Trash',
          props: [
            {
              attributes: [{ name: 'style', value: '{style}' }],
            },
          ],
        },
      ],
    },
  ],
  imports: [
    {
      items: 'ButtonIcon',
      path: './shared/ComponentsUI/components/ButtonIcon/ButtonIcon',
    },
    {
      items: '{ ReactComponent as Trash }',
      path: './assets/icons/trash.svg',
    },
  ],
};

export default {
  component: ButtonIcon,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/hVsmArh0s8VYibYYBtChnY/Components---UI?node-id=152%3A2',
    },
  },
  title: basicButtonIcon,
} as ComponentMeta<typeof ButtonIcon>;

const Template: ComponentStory<typeof ButtonIcon> = (args) => {
  const { theme } = useContext(Context);
  const style = { fill: theme === Theme.dark ? 'white' : 'black' };

  return (
    <StoryComponent
      blockCodeData={blockCodeData}
      description={description}
      title="Basic Button Icon"
    >
      <ButtonIcon {...args}>
        <div>
          <Trash style={style} />
        </div>
      </ButtonIcon>
      <ButtonIcon forcedHover {...args}>
        <div>
          <Trash style={style} />
        </div>
      </ButtonIcon>
      <ButtonIcon disabled {...args}>
        <div>
          <Trash style={style} />
        </div>
      </ButtonIcon>
    </StoryComponent>
  );
};

export const BasicButtonIcon = Template.bind({});

BasicButtonIcon.argTypes = {
  disabled: {
    table: {
      disable: true,
    },
  },
  forcedHover: {
    table: {
      disable: true,
    },
  },
};

BasicButtonIcon.args = {};
