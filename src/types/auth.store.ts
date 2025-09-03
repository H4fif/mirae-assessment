import type { ILoginSuccess } from './auth.response';

export interface AuthStoreState {
  auth?: ILoginSuccess;
}

export interface AuthStoreAction {
  setAuth: (payload: ILoginSuccess) => void;
  logout: () => void;
}
