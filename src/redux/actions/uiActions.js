import {UI_TYPES} from '../types';

export const showLoading = () => ({
  type: UI_TYPES.SHOW_LOADING,
});

export const hideLoading = () => ({
  type: UI_TYPES.HIDE_LOADING,
});
