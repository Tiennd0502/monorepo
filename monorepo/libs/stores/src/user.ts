// Libs
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { USER_STORE_KEY } from '@monorepo/constants';

// Types
import { User } from '@monorepo/types';

type States = {
  user: User | null;
};

type Actions = {
  setUser: (user: User) => void;
  removeUser: () => void;
};

const INITIAL_STATE: States = {
  user: null,
};

export const userStore = create(
  persist<States & Actions>(
    (set) => ({
      ...INITIAL_STATE,
      setUser: (user: User) => {
        set({ user });
      },
      removeUser: () => {
        set({ ...INITIAL_STATE });
      },
    }),
    {
      name: USER_STORE_KEY,
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
