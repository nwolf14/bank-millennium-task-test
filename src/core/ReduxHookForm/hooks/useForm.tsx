import { useSelector } from 'react-redux';

// others
import { TForm } from '../../../store/reduxHookForm/types';

// store
import { getFormAttributesSelectorCreator } from '../../../store/reduxHookForm/selectors';

const attributes = ['asyncTimeDelay', 'error', 'isPending', 'isValid'];

export type THookType = Partial<TForm>;

export const useForm = (formName: string): THookType =>
  useSelector(getFormAttributesSelectorCreator(attributes, formName));
