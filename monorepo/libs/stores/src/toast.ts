import { create } from 'zustand';

// Types
import { ToastActions, ToastState } from '@monorepo/types';

const INITIAL_MESSAGE_STATE: ToastState = {
  message: null,
  variant: 'success',
};

export const useToastStore = create<ToastState & ToastActions>((set) => ({
  ...INITIAL_MESSAGE_STATE,
  showToast: (value: ToastState): void => {
    set(value);
  },
  hideToast: () => {
    set(INITIAL_MESSAGE_STATE);
  },
}));
