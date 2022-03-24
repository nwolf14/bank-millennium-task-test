// others
import { TField, TForm } from '../types';

export const fieldMock: TField = {
  active: false,
  asyncErrors: [],
  data: {},
  initialValue: '',
  isPending: false,
  modified: false,
  modifiedSinceLastSubmit: false,
  syncErrors: [],
  touched: false,
  touchedAfterClick: false,
  value: '',
  valueSinceLastSubmit: '',
  visited: false,
};

export const formMock: TForm = {
  asyncTimeDelay: 0,
  error: '',
  fields: {},
  isPending: false,
  isValid: false,
};
