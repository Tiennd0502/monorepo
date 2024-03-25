export interface User {
  name: string;
  email: string;
  password: string;
  email_verified?: boolean;
  uuid?: string;
  dial_code?: string;
  first_name?: string;
  last_name?: string;
  profile_pic?: string;
  type?: string;
  key?: {
    auth_key: string;
    refresh_key: string;
  };
}
