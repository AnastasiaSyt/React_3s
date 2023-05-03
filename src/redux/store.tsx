import { configureStore } from '@reduxjs/toolkit';
import { unsplashAPI } from '../services/api';
import imageReducer from './ImageSlice';
import formReducer from './formSlice';

const store = configureStore({
  reducer: {
    images: imageReducer,
    [unsplashAPI.reducerPath]: unsplashAPI.reducer,
    form: formReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(unsplashAPI.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
