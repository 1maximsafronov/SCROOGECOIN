import { combineReducers } from '@reduxjs/toolkit';

import { appSlicer } from './app-slicer';
import { userSlicer } from './user-slicer';
import { api } from './api';

export const rootReducer = combineReducers({
  [appSlicer.name]: appSlicer.reducer,
  [userSlicer.name]: userSlicer.reducer,
  [api.reducerPath]: api.reducer,
});
