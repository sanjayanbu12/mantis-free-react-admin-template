import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  role: null,
  isPasswordChanged: false,
  resetPassword: false,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    setResetPassword: (state, action) => {
      state.resetPassword = action.payload;
    },
    setChangePassword: (state, action) => {
      state.changePassword = action.payload;
    },
    updateUser: (state, action) => {
      state.user = { ...state.user, ...action.payload };
    },
  },
});

export const { setUser, setResetPassword, updateUser, setChangePassword } = authSlice.actions;
export default authSlice.reducer;
