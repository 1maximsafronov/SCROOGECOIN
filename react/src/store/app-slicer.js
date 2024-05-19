import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  openedModal: null,
};


export const appSlicer = createSlice({
  name: 'APP',
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.openedModal = action.payload;
    },
    closeModal: (state) => {
      state.openedModal = null;
    }
  },
});


export const {
  openModal,
  closeModal,
} = appSlicer.actions;

export const selectOpenedModal = (state) => state.APP.openedModal;
