import {UI_TYPES} from '../types';

const initialState = {
  loadingFetch: false,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UI_TYPES.SHOW_LOADING:
      return {...state, loadingFetch: true};
    case UI_TYPES.HIDE_LOADING:
      return {...state, loadingFetch: false};
    default:
      return state;
  }
};
export default reducer;
