import { cleanTokenStorage, setTokenStorage } from '~/utils/storage';

import { APIResponse, privateApi, publicApi } from './base';
import { RegisterInitial } from '~/components/Register';
import { LoginInitial } from '~/components/Login';

const subPath = 'auth';
const useAuthApi = () => {
  const authApi = publicApi(subPath);
  const privateAuthApi = privateApi(subPath);

  const POST_REGISTER = async (userDate: typeof RegisterInitial) => {
    const resp = await authApi.post<APIResponse>('register', {
      ...userDate,
    });
    if (resp.data.data) setTokenStorage(resp.data.data);

    return resp;
  };

  const POST_LOGIN = async (userDate: typeof LoginInitial) => {


    const resp = await authApi.post<APIResponse>('login', {
      ...userDate,
    },
    {withCredentials: true, headers: { 'Content-Type': 'application/json' }
    
  });
    if (resp.data.data) setTokenStorage(resp.data.data);

    return resp;
  };

  const GET_REFRESH = async () => {
    const resp = await privateAuthApi.get<APIResponse<{ accessToken: string; refreshToken: string }>>('refresh', {
      withCredentials: true,
    });

    return resp;
  };

  const GET_TokenTest = async () => {
    const resp = await privateAuthApi.get('test');
    return resp;
  };

  const GET_LOGOUT = async () => {
    const resp = await authApi.get('logout', {
      withCredentials: true,
    });

    if (resp.data.status) cleanTokenStorage();
    return resp;
  };

  const GET_USER = async () => {
    const resp = await authApi.get('login/success', {
      withCredentials: true,
    });
    if (resp.data.data) setTokenStorage(resp.data.data);
    return resp;
  };


  const POST_PASSWORD_EMAIL = async (email: string) => {
    const resp = await authApi.post('reset-password', {
      email,
    });

    return resp;
  }

  const POST_RESET_PASSWORD = async ({password,confirmPassword}, token: string) => {
    
    const resp = await authApi.post(`reset-password/${token}`, {
      password,
      confirmPassword
    }
    );
    return resp;
  }

  return { 
    POST_REGISTER, 
    GET_REFRESH, 
    POST_LOGIN,
    GET_TokenTest, 
    GET_USER, 
    GET_LOGOUT,
    POST_PASSWORD_EMAIL ,
    POST_RESET_PASSWORD
    };
};

export default useAuthApi;
