import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { type IInputsForm } from '../pages/Form';

const formSlice = createSlice({
  name: 'form',
  initialState: {
    formDataList: [],
  },
  reducers: {
    addCard(state, action: PayloadAction<IInputsForm>) {
      state.formDataList.push(action.payload);
    },
  },
});

export const { addCard } = formSlice.actions;

export default formSlice.reducer;
