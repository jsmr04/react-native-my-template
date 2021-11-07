import CookieManager from '@react-native-community/cookies';
import { logoutInstagramAccount } from "../redux/reducers/instagramSession";
import { store } from "../redux/store";
import * as storage from '../storage';
import { InstagramSession } from '../types';
import { storeInstagramSessionInMemory } from "../redux/reducers/instagramSession";

export const clear = async () => {
  try {
    //Clean cookies
    await CookieManager.clearAll(true);
    //Remove instagram session
    await storage.remove('instagramSession');
    //Clean Redux
    store.dispatch(logoutInstagramAccount())
  } catch (error) {
    console.log(error);
  }
};

export const get = async () => {
    try {
        return storage.get("instagramSession")
    } catch (error) {
      console.log(error);
    }
};

export const init = async (session: InstagramSession) => {
    try {
        storage.save<InstagramSession>("instagramSession", session)

        store.dispatch(storeInstagramSessionInMemory(session))
    } catch (error) {
      console.log(error);
    }
};