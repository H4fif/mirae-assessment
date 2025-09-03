import type { LoginSchemaType } from '@/app/login/login.schema';
import apiRoute from '@/constants/api';
import { API } from '@/config/api';

const loginService = async (payload: LoginSchemaType) => {
  return await API.post(apiRoute.login, payload);
};

export { loginService };
