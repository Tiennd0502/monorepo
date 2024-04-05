import { SignUpForm } from '@monorepo/types';

import { REGEX } from './common';
import { ERROR_MESSAGES } from './message';

export const SCHEMA = {
  name: {
    required: ERROR_MESSAGES.FIELD_REQUIRED('Name'),
  },
  email: {
    required: ERROR_MESSAGES.FIELD_REQUIRED('Email'),
    pattern: {
      value: REGEX.EMAIL,
      message: ERROR_MESSAGES.FIELD_INVALID('Email'),
    },
  },
  password: {
    required: ERROR_MESSAGES.FIELD_REQUIRED('Password'),
    minLength: { value: 8, message: ERROR_MESSAGES.PASSWORD_NOT_LONG },
    validate: (value: string) => {
      switch (true) {
        case !REGEX.CHECK_NUMBER.test(value):
          return ERROR_MESSAGES.PASSWORD_NOT_HAVE_NUMBER;
        case !REGEX.CHECK_UPPERCASE.test(value):
          return ERROR_MESSAGES.PASSWORD_NOT_HAVE_UPPERCASE;
        case !REGEX.CHECK_SYMBOL.test(value):
          return ERROR_MESSAGES.PASSWORD_NOT_HAVE_SYMBOL;
        default:
          return;
      }
    },
  },
  confirmPassword: {
    required: ERROR_MESSAGES.FIELD_REQUIRED('Confirm password'),
    validate: (value: string, fields: SignUpForm) =>
      value !== fields.password ? ERROR_MESSAGES.PASSWORD_NOT_MATCH : true,
  },
};
