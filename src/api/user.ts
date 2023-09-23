import { APIResponse, privateApi } from './base';


const subPath = 'user';
const useUserApi = () => {

  const privateAuthApi = privateApi(subPath);

  const POST_USER_CHANGE_NAME = async (userName ) => {
    const resp = await privateAuthApi.post<APIResponse>('changeName', {
        userName 
    });

    return resp;
  }

 

  return { POST_USER_CHANGE_NAME };
};

export default useUserApi;
