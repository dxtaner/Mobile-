import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  user: null,
  authLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setAuthLoading: (state, action) => {
      state.authLoading = action.payload;
    },
    logout: state => {
      state.user = null;
      state.authLoading = false;
    },
  },
});

export const {setUser, setAuthLoading, logout} = authSlice.actions;
export default authSlice.reducer;
