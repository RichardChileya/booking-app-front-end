import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../../api/api';

const LOGIn = 'LOGIN';
const LOGOUT = 'LOGOUT';
const REGISTER = 'REGISTER';
const AUTH_USER_DETAIL = 'AUTH_USER_DETAIL';

const authUserSaved = localStorage.getItem('authUser');
let authenticatedUserSaved;
let authLoggedIn = false;
if (authUserSaved !== 'null' && authUserSaved !== 'undefined' && authUserSaved !== null && authUserSaved !== undefined) {
  authenticatedUserSaved = JSON.parse(authUserSaved);
  authLoggedIn = true;
} else {
  authenticatedUserSaved = {};
  authLoggedIn = false;
}
const initialState = {
  authenticatedUser: authenticatedUserSaved,
  loggedin: authLoggedIn,
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed' | 'unauthorized' | 'expired'//
  message: '',
  error: null,
};

export const signUp = createAsyncThunk(REGISTER, async (user) => {
  try {
    return await api.register(user);
  } catch (error) {
    return error.message;
  }
});

export const signIn = createAsyncThunk(LOGIn, async (user) => {
  try {
    return await api.login(user);
  } catch (error) {
    return error.message;
  }
});

export const signOut = createAsyncThunk(LOGOUT, async () => {
  try {
    return await api.logout();
  } catch (error) {
    return error.message;
  }
});

export const authUserDetail = createAsyncThunk(AUTH_USER_DETAIL,
  async () => {
    try {
      return await api.userDetails();
    } catch (error) {
      return error.message;
    }
  });

const authSlice = createSlice({
  name: 'authenticatedUser',
  initialState,
  reducers: {
    setStatusIdle: (state) => ({
      ...state,
      status: 'idle',
      message: '',
    }),
  },

  extraReducers: (builder) => {
    builder
      .addCase(signUp.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(signUp.fulfilled, (state, action) => ({
        ...state,
        authenticatedUser: action.payload.data,
        message: action.payload.message,
        status: action.payload.status,
        loggedin: true,
      }))
      .addCase(signUp.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }))
      .addCase(signIn.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(signIn.fulfilled, (state, action) => ({
        ...state,
        authenticatedUser: action.payload.user,
        message: action.payload.message,
        status: action.payload.status,
        loggedin: true,
      }))
      .addCase(signIn.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }))
      .addCase(signOut.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(signOut.fulfilled, (state, action) => ({
        ...state,
        authenticatedUser: {},
        message: action.payload.message,
        status: action.payload.status,
        loggedin: false,
      }))
      .addCase(signOut.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }))
      .addCase(authUserDetail.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(authUserDetail.fulfilled, (state, action) => ({
        ...state,
        authenticatedUser: action.payload.user,
        message: action.payload.message,
        status: action.payload.status,
      }))
      .addCase(authUserDetail.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }));
  },
});

export const { setStatusIdle } = authSlice.actions;
export const authenticatedUser = (state) => state.user.authenticatedUser;
export const allStatus = (state) => state.user.status;
export const allMessages = (state) => state.user.message;
export const loggedin = (state) => state.user.loggedin;

export default authSlice.reducer;
