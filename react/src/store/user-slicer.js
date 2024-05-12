import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userData: null,
  isAuth: false,
  // registrationStatus: {
  //   status: 'error',
  //   message: 'Registration failed',
  //   data: null,
  // },
  // loginStatus: {
  //   status: 'error',
  //   message: 'Login failed',
  //   data: null,
  // }
  registrationStatus: null,
  loginStatus: null,
};


export const userSlicer = createSlice({
  name: 'USER',
  initialState,
  reducers: {
    changeAuthStatus: (state, action) => {
      state.isAuth = action.payload;
    },
    login: (state, action) => {
      const { email, password } = action.payload;

      console.log('login', { email, password });

    },
    registration: (state, action) => {
      const { name, email, password } = action.payload;

      console.log('registration', { name, email, password });
    },
    logout: (state) => {
      state.isAuth = false;
      state.userData = null;
      console.log('logout');
    }
  },
});


export const {
  changeAuthStatus,
  login,
  registration,
  logout,
} = userSlicer.actions;

export const selectAuthStatus = (state) => state.USER.isAuth;
export const selectUserData = (state) => state.USER.userData;
export const selectRegistrationStatus = (state) => state.USER.registrationStatus;
export const selectLoginStatus = (state) => state.USER.loginStatus;
