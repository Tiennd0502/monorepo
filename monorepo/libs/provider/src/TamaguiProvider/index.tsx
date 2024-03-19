import { ReactNode } from 'react';
import { TamaguiProvider } from '@tamagui/core';

import config from '../../tamagui.config';

interface Props {
  children: ReactNode;
}

const ThemesProvider = ({ children }: Props) => (
  <TamaguiProvider config={config}>{children}</TamaguiProvider>
);

export default ThemesProvider;
