import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserSession } from "../../types";

// Default
const userSession: UserSession = {
  username: '',
  token: '',
  userId: 0
}
const initialState  = {
  userSession
};

//Slice
const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    storeSessionInMemory: (state, action: PayloadAction<UserSession>) => {
        state.userSession.token = action.payload.token
        state.userSession.userId = action.payload.userId
        state.userSession.username = action.payload?.username
    },
    logoutUser: state => {
        state.userSession = initialState.userSession
    },
  },
});

//Actions
export const { storeSessionInMemory, logoutUser } = sessionSlice.actions

//Reducer
export default sessionSlice.reducer
