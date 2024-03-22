import { TOKEN_KEYS } from '@monorepo/types';
import { Token, getTokenValue } from 'tamagui';

export const isTamaguiVariable = (value?: string) => {
  return Boolean(value?.includes('$'));
};

export const getTokenValueByKey = (key: TOKEN_KEYS, value: string) => {
  if (isTamaguiVariable(value)) {
    return getTokenValue(value as Token, key);
  }

  return value;
};
