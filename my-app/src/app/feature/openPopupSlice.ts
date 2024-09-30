import { createSlice } from '@reduxjs/toolkit';

interface OpenPopupState {
  isOpen: boolean;
}

const initialState: OpenPopupState = {
  isOpen: false,
};

const openPopupSlice = createSlice({
  name: 'openPopup',
  initialState,
  reducers: {
    openPopup(state) {
      state.isOpen = true;
    },
    closePopup(state) {
      state.isOpen = false;
    },
  },
});

export const { openPopup, closePopup } = openPopupSlice.actions;
export default openPopupSlice.reducer;