import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useContext } from 'react';

// components
import Checkbox from '../Checkbox';
import StoryComponent from '../../../../../stories/components/StoryComponent/StoryComponent';

// core
import { Context } from '../../../../../core/ContextProvider/ContextProvider';

// others
import { checkboxIcon } from '../../../../../stories/constants';
import { ReactComponent as BookmarkDark } from '../../../../../stories/assets/icons/bookmark-dark.svg';
import { ReactComponent as BookmarkLight } from '../../../../../stories/assets/icons/bookmark-light.svg';
import { ReactComponent as BookmarkOutlinedDark } from '../../../../../stories/assets/icons/bookmark-outlined-dark.svg';
import { ReactComponent as BookmarkOutlinedLight } from '../../../../../stories/assets/icons/bookmark-outlined-light.svg';
import { ReactComponent as HeartDark } from '../../../../../stories/assets/icons/heart-dark.svg';
import { ReactComponent as HeartLight } from '../../../../../stories/assets/icons/heart-light.svg';
import { ReactComponent as HeartOutlinedDark } from '../../../../../stories/assets/icons/heart-outlined-dark.svg';
import { ReactComponent as HeartOutlinedLight } from '../../../../../stories/assets/icons/heart-outlined-light.svg';
import { Theme } from '../../../../../core/ContextProvider/enums';
import { TStoryBlockCode } from '../../../../../stories/components/StoryBlockCode/types';

const description = [
  'You can overwrite unchecked icon & checked icon. There is no support for color but render as svg.',
];

const blockCodeData: TStoryBlockCode = {
  componentName: 'Checkbox',
  props: [
    {
      attributes: [
        { name: 'checkIcon', value: 'Heart' },
        { name: 'uncheckIcon', value: 'HeartOutlined' },
      ],
      children: '',
    },
    {
      attributes: [
        { name: 'checkIcon', value: 'Bookmark' },
        { name: 'uncheckIcon', value: 'BokmarkOutlined' },
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
      items: '{ ReactComponent as Bookmark }',
      path: './assets/icons/bookmark.svg',
    },
    {
      items: '{ ReactComponent as BokmarkOutlined }',
      path: './assets/icons/bookmark-outlined.svg',
    },
    {
      items: '{ ReactComponent as Heart }',
      path: './assets/icons/heart.svg',
    },
    {
      items: '{ ReactComponent as HeartOutlined }',
      path: './assets/icons/heart-outlined.svg',
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
  title: checkboxIcon,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => {
  const { theme } = useContext(Context);
  const isDarkTheme = theme === Theme.dark;

  return (
    <StoryComponent
      blockCodeData={blockCodeData}
      description={description}
      title="Checkbox Icon"
    >
      <Checkbox
        CheckedIcon={isDarkTheme ? HeartDark : HeartLight}
        UncheckedIcon={isDarkTheme ? HeartOutlinedDark : HeartOutlinedLight}
        {...args}
      />
      <Checkbox
        CheckedIcon={isDarkTheme ? BookmarkDark : BookmarkLight}
        UncheckedIcon={
          isDarkTheme ? BookmarkOutlinedDark : BookmarkOutlinedLight
        }
        {...args}
      />
    </StoryComponent>
  );
};

export const CheckboxIcon = Template.bind({});

CheckboxIcon.argTypes = {
  CheckedIcon: {
    table: {
      disable: true,
    },
  },
  UncheckedIcon: {
    table: {
      disable: true,
    },
  },
};

CheckboxIcon.args = {};
