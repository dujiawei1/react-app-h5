import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './modules/loginStore';
import clinicReducer from './modules/clinicStore';

export const store = configureStore({
  reducer: {
    login: loginReducer,
    clinic: clinicReducer
  }
});
