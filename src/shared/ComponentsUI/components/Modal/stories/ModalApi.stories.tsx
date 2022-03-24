import { ComponentStory, ComponentMeta } from '@storybook/react';

// components
import Modal from '../Modal';
import StoryApi from '../../../../../stories/components/StoryApi/StoryApi';

// others
import { modalAPI } from '../../../../../stories/constants';
import { TStoryBlockCode } from '../../../../../stories/components/StoryBlockCode/types';
import { TTableBody } from '../../../../../stories/components/StoryPropsTable/types';

const description = [
  'API documentation for the React Modal component. Learn about the available props.',
];

const tableBodyData: Array<TTableBody> = [
  {
    name: 'children',
    type: 'node',
    description: 'The content of the component.',
  },
  {
    name: 'className',
    type: 'string',
    description: 'Override or extend the styles applied to the component.',
  },
  {
    name: 'classNameContent',
    type: 'string',
    description: 'Override or extend the styles applied to the content.',
  },
  {
    name: 'classNameFooter',
    type: 'string',
    description: 'Override or extend the styles applied to the footer.',
  },
  {
    name: 'classNameHeader',
    type: 'string',
    description: 'Override or extend the styles applied to the header.',
  },
  {
    name: 'disableClickOnBackdrop',
    type: 'boolean',
    defaultValue: 'false',
    description:
      'Whether to close the modal dialog when the mask (area outside the modal) is clicked',
  },
  {
    name: 'disableEscapeKeyDown',
    type: 'boolean',
    defaultValue: 'false',
    description:
      'If <code>true</code>, hitting escape will not fire the onClose callback.',
  },
  {
    name: 'footer',
    type: 'node',
    description: 'The footer of the component.',
  },
  {
    name: 'modalId',
    type: 'ModalId',
    description:
      'Main id wchich decide which modal should be opened. If in redux id exists and is equal the same id than modal will appear..',
  },
  {
    name: 'style',
    type: 'object',
    description: 'Override styles by object of styles.',
  },
  {
    name: 'title',
    type: 'string',
    description: 'Main title which is placements in header.',
  },
];

const blockCodeData: TStoryBlockCode = {
  imports: [
    {
      items: 'Modal',
      path: './shared/ComponentsUI/components/Modal/Modal',
    },
  ],
};

export default {
  component: Modal,
  title: modalAPI,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = () => (
  <StoryApi
    blockCodeData={blockCodeData}
    description={description}
    tableBodyData={tableBodyData}
    title="Modal API"
  />
);

export const ModalAPI = Template.bind({});
