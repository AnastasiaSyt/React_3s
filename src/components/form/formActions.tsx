import { type IInputsForm } from '../../pages/Form';

export const ADD_FORM_DATA = 'ADD_FORM_DATA';
export const RESET_FORM_DATA = 'RESET_FORM_DATA';

export const addFormData = (data: IInputsForm) => ({
  type: ADD_FORM_DATA,
  payload: data,
});

export const resetFormData = () => ({
  type: RESET_FORM_DATA,
});
