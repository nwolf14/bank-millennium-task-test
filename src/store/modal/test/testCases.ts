// others
import { ModalId } from './../../../shared/ComponentsUI/components/Modal/enums';

/**
 *
 * @Selectors
 */
export const getModalIdSelectorTestCases = () => [
  {
    args: {
      mockStore: {
        modalId: undefined,
      },
    },
    description: 'should return undefined',
    expectedResult: undefined,
  },
  {
    args: {
      mockStore: {
        modalId: ModalId.storyBookModal,
      },
    },
    description: 'should return proper id',
    expectedResult: ModalId.storyBookModal,
  },
];
