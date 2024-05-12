import { combineReducers } from '@reduxjs/toolkit';

import { appSlicer } from './app-slicer';
import { userSlicer } from './user-slicer';

export const rootReducer = combineReducers({
  [appSlicer.name]: appSlicer.reducer,
  [userSlicer.name]: userSlicer.reducer,
});
