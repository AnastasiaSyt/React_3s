import { initialState } from './store';

const reducer = (state = initialState, action) => {
  console.log('reducer > ', action);
  return state;
};

export default reducer;
