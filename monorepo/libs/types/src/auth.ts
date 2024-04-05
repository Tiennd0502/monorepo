import { User } from './user';
import { APIResponse } from './common';

export interface AuthKey {
  auth_key: string;
  refresh_key: string;
}

export enum AUTH_TYPES {
  CUSTOMER = 'customer',
}

export interface SignUpPayload {
  user: User;
}

export interface SignUpForm extends User {
  confirmPassword: string;
}

export interface LoginForm {
  email: string;
  password: string;
}

export interface Verify {
  verify_id: string;
  code?: string;
}

export type VerifyPayload = Verify;

export type SignUpResponse = APIResponse<Verify>;

export interface AuthResponse {
  status: boolean;
  data: {
    user: User;
  };
}

export interface LoginPayLoad {
  user: {
    uuid: string;
    email: string;
    password: string;
    type: AUTH_TYPES;
  };
}

export type VerifyResponse = SignUpPayload;
