import { createStore } from 'redux';
import formReducer from './formReducer';

const store = createStore(formReducer);

export default store;
export type RootState = ReturnType<typeof store.getState>;
