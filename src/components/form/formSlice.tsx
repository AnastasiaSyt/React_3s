import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type ThunkAction } from 'redux-thunk';
import { type RootState } from '../../redux/store';
import { type ICardData } from './CardsList';

interface IFormState {
  formDataList: ICardData[];
  isSuccess: boolean;
}

interface IInputsForm {
  image: FileList;
  title: string;
  person: string;
  personImg: string;
  date: string;
  checkboxValue: boolean;
}

const initialState: IFormState = {
  formDataList: [],
  isSuccess: false,
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setFormDataList: (state, action: PayloadAction<ICardData[]>) => {
      state.formDataList = action.payload;
    },
    setIsSuccess: (state, action: PayloadAction<boolean>) => {
      state.isSuccess = action.payload;
    },
  },
});

export const { setFormDataList, setIsSuccess } = formSlice.actions;

export const submitForm =
  (data: IInputsForm): ThunkAction<void, RootState, unknown, PayloadAction<ICardData[]>> =>
  async (dispatch, getState) => {
    const { formDataList } = getState().form;
    const fileCopy = Object.assign({}, data);
    fileCopy.image = { ...data.image };
    dispatch(setIsSuccess(true));
    dispatch(setFormDataList([...formDataList, fileCopy]));
  };

export const handleChange =
  (): ThunkAction<void, RootState, unknown, PayloadAction<boolean>> => async (dispatch) => {
    dispatch(setIsSuccess(false));
  };
