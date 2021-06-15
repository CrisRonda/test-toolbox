import {WORD_TYPES} from '../types';

const initialState = {
  words: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case WORD_TYPES.SET_WORDS:
      return {...state, words: action.payload};
    default:
      return state;
  }
};
export default reducer;
