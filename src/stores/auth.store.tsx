import type { AuthStoreAction, AuthStoreState } from '@/types/auth.store';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const initialStates: AuthStoreState = {
  auth: undefined,
};

export const useAuthStore = create<AuthStoreState & AuthStoreAction>()(
  devtools(
    persist(
      (set) => ({
        ...initialStates,
        setAuth: (payload) => {
          set((state) => ({ ...state, auth: payload }));
        },
        logout: () => {
          localStorage.clear();
          set((state) => ({ ...state, auth: undefined }));
        },
      }),
      { name: 'auth-store' }
    )
  )
);
