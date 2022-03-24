import { ComponentStory, ComponentMeta } from '@storybook/react';

// components
import Typography from '../Typography';
import StoryApi from '../../../../../stories/components/StoryApi/StoryApi';

// others
import { typographyAPI } from '../../../../../stories/constants';
import { TStoryBlockCode } from '../../../../../stories/components/StoryBlockCode/types';
import { TTableBody } from '../../../../../stories/components/StoryPropsTable/types';

const description = [
  'API documentation for the React Typography component. Learn about the available props.',
];

const tableBodyData: Array<TTableBody> = [
  {
    name: 'attributeValue',
    type: 'string',
    description: 'Attribute for e2e.',
  },
  {
    name: 'children',
    type: 'ReactElement | Array<ReactElement>',
    description: 'The content of the component.',
  },
  {
    name: 'className',
    type: 'string',
    description: 'Override or extend the styles applied to the component.',
  },
  {
    name: 'fontStyle',
    type: `normal'<br/>|&nbsp;'italic'<br/>|&nbsp;'normal'<br/>|&nbsp;'string'`,
    defaultValue: 'normal',
    description: 'The font style to use.',
  },
  {
    name: 'fontWeight',
    type: `regular'<br/>|&nbsp;'black'<br/>|&nbsp;'black'<br/>|&nbsp;'extraBold'<br/>|&nbsp;'light'<br/>|&nbsp;'medium'<br/>|&nbsp;'regular'<br/>|&nbsp;'semiBold'<br/>|&nbsp;'string'`,
    defaultValue: 'regular',
    description: 'The font weight to use.',
  },
  {
    name: 'variant',
    type: `text'<br/>|&nbsp;'h1'<br/>|&nbsp;'h2'<br/>|&nbsp;'h3'<br/>|&nbsp;'h4'<br/>|&nbsp;'h5'<br/>|&nbsp;'h6'<br/>|&nbsp;'text'<br/>|&nbsp;'smallText'<br/>|&nbsp;'string'`,
    defaultValue: 'text',
    description: 'The variant to use.',
  },
];

const blockCodeData: TStoryBlockCode = {
  imports: [
    {
      items: 'Typography',
      path: './shared/ComponentsUI/components/Typography/Typography',
    },
  ],
};

export default {
  component: Typography,
  title: typographyAPI,
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = () => (
  <StoryApi
    blockCodeData={blockCodeData}
    description={description}
    tableBodyData={tableBodyData}
    title="Typography API"
  />
);

export const TypographyAPI = Template.bind({});
