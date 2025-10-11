import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './modules/loginStore';

export const store = configureStore({
  reducer: {
    login: loginReducer
  }
});
