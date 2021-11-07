import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import sessionReducer from './reducers/session';

const reducer = combineReducers({
  session: sessionReducer,
});

export const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
