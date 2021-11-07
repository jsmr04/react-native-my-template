import { store } from "../redux/store";
import * as storage from '../storage';
import { UserSession } from '../types';
import { storeSessionInMemory, logoutUser } from "../redux/reducers/session";
import { setToken } from "../api/template/axiosClient";

export const clear = async () => {
  try {
    //Remove instagram session
    await storage.remove('session');
    //Clean Redux
    store.dispatch(logoutUser())

    //
    // setToken(null)
  } catch (error) {
    console.log(error);
  }
};

export const get = async () => {
    try {
        return storage.get("session")
    } catch (error) {
      console.log(error);
    }
};

export const init = async (session: UserSession) => {
    try {
        storage.save<UserSession>("session", session)

        store.dispatch(storeSessionInMemory(session))
    } catch (error) {
      console.log(error);
    }
};