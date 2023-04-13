import { configureStore } from '@reduxjs/toolkit';
import cardsReducer from '../components/form/formsCardSlice';

const store = configureStore({
  reducer: cardsReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
