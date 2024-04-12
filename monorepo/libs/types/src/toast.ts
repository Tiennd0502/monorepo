export type ToastVariant = 'success' | 'error';

export type ToastState = {
  variant: ToastVariant;
  message: string | null;
  code?: string;
};

export type ToastActions = {
  showToast: (value: ToastState) => void;
  hideToast: () => void;
};
