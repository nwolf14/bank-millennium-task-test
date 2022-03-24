import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useContext } from 'react';

// components
import ButtonIcon from '../ButtonIcon';
import StoryComponent from '../../../../../stories/components/StoryComponent/StoryComponent';

// core
import { Context } from '../../../../../core/ContextProvider/ContextProvider';

// others
import { buttonIconSize } from '../../../../../stories/constants';
import { ReactComponent as Trash } from '../../../../../stories/assets/icons/trash.svg';
import { Size } from '../../Button/enums';
import { Theme } from '../../../../../core/ContextProvider/enums';
import { TStoryBlockCode } from '../../../../../stories/components/StoryBlockCode/types';

const description = [
  'For larger or smaller icon buttons, use the <code>size</code> prop.',
];

const blockCodeData: TStoryBlockCode = {
  componentName: 'ButtonIcon',
  props: [
    {
      attributes: [{ name: 'size', value: 'Size.small' }],
      children: [
        {
          componentName: 'Trash',
          props: [
            {
              attributes: [
                { name: 'height', value: '12' },
                { name: 'style', value: '{style}' },
                { name: 'width', value: '16' },
              ],
            },
          ],
        },
      ],
    },
    {
      children: [
        {
          componentName: 'Trash',
          props: [
            {
              attributes: [
                { name: 'height', value: '18' },
                { name: 'style', value: '{style}' },
                { name: 'width', value: '22' },
              ],
            },
          ],
        },
      ],
    },
    {
      attributes: [{ name: 'size', value: 'Size.large' }],
      children: [
        {
          componentName: 'Trash',
          props: [
            {
              attributes: [
                { name: 'height', value: '23' },
                { name: 'style', value: '{style}' },
                { name: 'width', value: '28' },
              ],
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
      items: '{ Size }',
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
  title: buttonIconSize,
} as ComponentMeta<typeof ButtonIcon>;

const Template: ComponentStory<typeof ButtonIcon> = (args) => {
  const { theme } = useContext(Context);
  const style = { fill: theme === Theme.dark ? 'white' : 'black' };

  return (
    <StoryComponent
      blockCodeData={blockCodeData}
      description={description}
      title="Button Icon Size"
    >
      <ButtonIcon size={Size.small} {...args}>
        <div>
          <Trash height="10" style={style} width="15" />
        </div>
      </ButtonIcon>
      <ButtonIcon {...args}>
        <div>
          <Trash height="18" style={style} width="21" />
        </div>
      </ButtonIcon>
      <ButtonIcon size={Size.large} {...args}>
        <div>
          <Trash height="28" style={style} width="35" />
        </div>
      </ButtonIcon>
    </StoryComponent>
  );
};

export const ButtonIconSize = Template.bind({});

ButtonIconSize.argTypes = {
  size: {
    table: {
      disable: true,
    },
  },
};

ButtonIconSize.args = {};
