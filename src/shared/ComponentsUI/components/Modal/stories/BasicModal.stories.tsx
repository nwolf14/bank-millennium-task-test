import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useDispatch } from 'react-redux';

// components
import Button from '../../Button/Button';
import Modal from '../Modal';
import StoryComponent from '../../../../../stories/components/StoryComponent/StoryComponent';

// others
import { basicModal } from '../../../../../stories/constants';
import { ModalId } from '../enums';
import { TStoryBlockCode } from '../../../../../stories/components/StoryBlockCode/types';

// store
import { openModal } from '../../../../../store/modal/actions';
import { Color, Variant } from '../../Button/enums';

const description = [
  `The modal component provides a solid foundation for creating dialogs, popovers, lightboxes, or whatever else.`,
];

const blockCodeData: TStoryBlockCode = {
  componentName: 'Modal',
  props: [
    {
      attributes: [
        { name: 'footer', value: 'React.Node' },
        { name: 'modalId', value: 'ModalId.storyBookModal' },
        { name: 'title', value: 'Title' },
      ],
      children: 'Some long text...',
    },
  ],
  imports: [
    {
      items: 'Modal',
      path: './shared/ComponentsUI/components/Modal/Modal',
    },
    {
      items: '{ ModalId }',
      path: './shared/ComponentsUI/components/Modal/enums',
    },
  ],
};

export default {
  component: Modal,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/hVsmArh0s8VYibYYBtChnY/Components---UI?node-id=813%3A18',
    },
  },
  title: basicModal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => {
  const dispatch = useDispatch();

  const Footer = () => (
    <>
      <Button color={Color.secondary} variant={Variant.outlined}>
        Close
      </Button>
      <Button style={{ marginLeft: '25px' }}>Open</Button>
    </>
  );

  return (
    <StoryComponent
      blockCodeData={blockCodeData}
      description={description}
      title="Basic Modal"
    >
      <Button onClick={() => dispatch(openModal(ModalId.storyBookModal))}>
        Open Modal
      </Button>
      <Modal
        {...args}
        footer={<Footer />}
        modalId={ModalId.storyBookModal}
        title="Title"
      >
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula. Duis
        mollis, est non commodo luctus, nisi erat porttitor ligula. mollis, est
        non commodo luctus, nisi erat porttitor ligula. mollis, est non commodo
        luctus, nisi erat porttitor ligula.
      </Modal>
    </StoryComponent>
  );
};

export const BasicModal = Template.bind({});

BasicModal.argTypes = {
  children: {
    table: {
      disable: true,
    },
  },
  footer: {
    table: {
      disable: true,
    },
  },
  modalId: {
    table: {
      disable: true,
    },
  },
  title: {
    table: {
      disable: true,
    },
  },
};

BasicModal.args = {};
