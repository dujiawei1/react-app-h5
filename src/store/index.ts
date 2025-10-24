import {
  useDispatch,
  useSelector,
  TypedUseSelectorHook,
  shallowEqual
} from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './modules/loginStore';
import clinicReducer from './modules/clinicStore';

export const store = configureStore({
  reducer: {
    login: loginReducer,
    clinic: clinicReducer
  }
});

type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export const shallowEqualApp = shallowEqual;
