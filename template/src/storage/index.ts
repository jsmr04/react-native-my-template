import EncryptedStorage from 'react-native-encrypted-storage';

type KEY = 'session'

export const save = async <T>(key: KEY, session: T) => {
  try {
    await EncryptedStorage.setItem(key, JSON.stringify(session));
  } catch (error) {
      console.log(error)
  }
};

export const get = async (key: KEY) => {
  try {
    const session = await EncryptedStorage.getItem(key);
    return session
  } catch (error) {
    console.log(error)
  }
};

export const remove = async (key: KEY) => {
  try {
    await EncryptedStorage.removeItem(key);
  } catch (error) {
    console.log(error)
  }
};
