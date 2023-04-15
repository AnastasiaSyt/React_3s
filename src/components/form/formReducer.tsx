import { type PayloadAction } from '@reduxjs/toolkit';
import { type IInputsForm } from '../../pages/Form';
import { ADD_FORM_DATA, RESET_FORM_DATA } from './formActions';

const initialState: { formDataList: IInputsForm[] } = {
  formDataList: [],
};

export default function formReducer(
  state = initialState,
  action: { type: string; payload?: PayloadAction<IInputsForm> }
) {
  switch (action.type) {
    case ADD_FORM_DATA:
      return {
        ...state,
        formDataList: [...state.formDataList, action.payload],
      };
    case RESET_FORM_DATA:
      return {
        ...state,
        formDataList: [],
      };
    default:
      return state;
  }
}
