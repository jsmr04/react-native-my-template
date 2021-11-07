import axios from './axiosClient';
import {User, UserSession, RegisterData} from '../../types';
import {getFullPath} from '../../helpers/apiHelper';

const LOGIN_PATH = '/api/auth/login';
const SIGNUP_PATH = '/api/auth/signup';

export const login = async (user: User) => {
  const url = getFullPath(LOGIN_PATH);

  const data = {
    userName: user.username,
    password: user.password,
  };

  const response = await axios.post<UserSession>(url, data);
  return response;
};

export const signup = async (user: RegisterData ) => {
  const url = getFullPath(SIGNUP_PATH);

  const data = {
    userName: user.username,
    password: user.password,
    fullName: user.name,
    email: user.email,
  };

  const response = await axios.post<UserSession>(url, data);
  return response;
};