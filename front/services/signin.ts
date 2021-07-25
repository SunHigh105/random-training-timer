import { ApiConfig, createAxiosInstance } from "./common";
import { User } from './models';

export interface SigninFormParams {
  email: string,
  password: string,
}

export const getUser = async (optionConfig?: ApiConfig) => {
  const instance = createAxiosInstance(optionConfig);
  
  try {
    const res = await instance.get('/api/user');
    return res.data;    
  } catch (e) {
    return { id: '', name: '' };
    
  }
}

export const signin = async (user?: User, optionConfig?: ApiConfig) => {
  const instance = createAxiosInstance(optionConfig);

  try {
    const tokenRes = await instance.get('/sanctum/csrf-cookie');
    const userRes = await instance.post('/api/login', user);
    if (userRes.data.status !== 200) {
      throw new Error();
    }
    return { token: tokenRes, user: userRes.data, isError: false };
  } catch (e) {
    return { isError: true };
  }
}

export const logout = async (optionConfig?: ApiConfig) => {
  const instance = createAxiosInstance(optionConfig);

  try {
    const res = await instance.get('/api/logout');
    if (res.status !== 200) {
      throw new Error();
    }
    return { status: res.status, isError: false };
  } catch (e) {
    return { status: 500, isError: true };
  }
}
