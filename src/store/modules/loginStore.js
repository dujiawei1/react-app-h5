import { createSlice } from '@reduxjs/toolkit';

const loginStore = createSlice({
  name: 'loginStore',
  initialState: {
    token: ''
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    clearToken: (state) => {
      state.token = '';
    }
  }
});

export const { setToken, clearToken } = loginStore.actions;
export default loginStore.reducer;
