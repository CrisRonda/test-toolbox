import {WORD_TYPES} from '../types';

export const setWords = data => ({
  payload: data,
  type: WORD_TYPES.SET_WORDS,
});
