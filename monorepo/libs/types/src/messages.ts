export type MessageBasic = {
  message: string;
  code?: string;
};

export type MessageState = {
  errorMessage: MessageBasic | null;
  successMessage: MessageBasic | null;
};

export type MessageActions = {
  setErrorMessage: (message: string, code?: string) => void;
  setSuccessMessage: (message: string, code?: string) => void;
  clearErrorMessage: () => void;
  clearSuccessMessage: () => void;
  clearAllMessage: () => void;
};
