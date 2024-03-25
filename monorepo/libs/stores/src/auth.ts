import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Constants
import { AUTH_STORE_KEY } from '@monorepo/constants';

// Types
import { AuthKey } from '@monorepo/types';

type States = {
  authKey: AuthKey | null;
  verify_id: string;
};

type Actions = {
  setAuthKey: (authKey: AuthKey) => void;
  setVerifyId: (id: string) => void;
  removeAuth: () => void;
  removeVerifyId: () => void;
};

const INITIAL_STATE: States = {
  authKey: null,
  verify_id: '',
};

export const authStore = create(
  persist<States & Actions>(
    (set) => ({
      ...INITIAL_STATE,
      setAuthKey: (authKey: AuthKey) => {
        set({ authKey });
      },
      setVerifyId: (verify_id: string) => {
        set((state) => ({
          ...state,
          verify_id,
        }));
      },
      removeAuth: () => {
        set({ ...INITIAL_STATE });
      },
      removeVerifyId: () => {
        set({ ...INITIAL_STATE });
      },
    }),
    {
      name: AUTH_STORE_KEY,
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
