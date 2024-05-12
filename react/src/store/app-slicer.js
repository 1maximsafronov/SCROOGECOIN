import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: 'TEST',
  openedModal: null,
};


export const appSlicer = createSlice({
  name: 'APP',
  initialState,
  reducers: {
    changeStatus: (state, action) => {
      state.status = action.payload;
    },
    openModal: (state, action) => {
      state.openedModal = action.payload;
    },
    closeModal: (state) => {
      state.openedModal = null;
    }
  },
});


export const {
  changeStatus,
  openModal,
  closeModal,
} = appSlicer.actions;

export const selectStatus = (state) => state.APP.status;
export const selectOpenedModal = (state) => state.APP.openedModal;
