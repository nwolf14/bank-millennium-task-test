// hooks
import {
  THookType as TFieldInputProps,
  useInputProps,
} from '../components/Field/hooks/useInputProps';
import {
  THookType as TFieldMetaProps,
  useMetaProps,
} from '../components/Field/hooks/useMetaProps';

export type THookType = Partial<TFieldInputProps> & Partial<TFieldMetaProps>;

export const useField = (formName: string, name: string): THookType => {
  const inputProps = useInputProps(formName, name);
  const metaProps = useMetaProps(formName, name);

  return {
    ...inputProps,
    ...metaProps,
  };
};
