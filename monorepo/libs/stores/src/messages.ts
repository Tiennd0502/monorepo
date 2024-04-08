import { create } from 'zustand';

// Types
import { MessageActions, MessageState } from '@monorepo/types';

const INITIAL_MESSAGE_STATE: MessageState = {
  errorMessage: null,
  successMessage: null,
};

export const useMessageStore = create<MessageState & MessageActions>((set) => ({
  ...INITIAL_MESSAGE_STATE,
  setErrorMessage: (message: string, code?: string): void => {
    const errorMessage = {
      message,
      ...(code && { code }),
    };
    set({ errorMessage });
  },

  setSuccessMessage: (message: string, code?: string): void => {
    const successMessage = {
      message,
      ...(code && { code }),
    };
    set({ successMessage });
  },

  clearErrorMessage: () => {
    set({ errorMessage: null });
  },

  clearSuccessMessage: () => {
    set({ successMessage: null });
  },

  clearAllMessage: () => {
    set(INITIAL_MESSAGE_STATE);
  },
}));
