import { useMutation } from '@tanstack/react-query';

// Constants
import { API_PATH } from '@monorepo/constants';

// Utils
import { POST, PATCH } from '@monorepo/utils';

// Types
import {
  LoginPayLoad,
  SignUpPayload,
  SignUpResponse,
  AuthResponse,
  VerifyPayload,
  VerifyResponse,
} from '@monorepo/types';

export const useAuth = () => {
  const logIn = useMutation({
    mutationFn: (data: LoginPayLoad) =>
      POST<AuthResponse, LoginPayLoad>(API_PATH.LOGIN, data),
  });

  const signUp = useMutation({
    mutationFn: (data: SignUpPayload) =>
      POST<SignUpResponse, SignUpPayload>(API_PATH.REGISTER, data),
  });

  const verifyOTP = useMutation({
    mutationFn: (data: VerifyPayload) =>
      POST<VerifyResponse, VerifyPayload>(API_PATH.VERIFY, data),
  });

  const update = useMutation({
    mutationFn: (data: SignUpPayload) =>
      PATCH<VerifyResponse, SignUpPayload>(
        `${API_PATH.USERS}/${data.user.uuid}`,
        data
      ),
  });

  const logOut = useMutation({
    mutationFn: (uuid: string) => POST(API_PATH.LOGOUT, { uuid }),
  });

  return { logIn, logOut, signUp, verifyOTP, update };
};
