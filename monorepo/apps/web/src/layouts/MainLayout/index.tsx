import { ReactNode } from 'react';
import { Stack } from 'tamagui';

import { Loading } from '@monorepo/ui';

interface MainLayoutProps {
  children: ReactNode;
  isLoading?: boolean;
}

const MainLayout = ({ isLoading, children }: MainLayoutProps) => (
  <Stack
    position="relative"
    height="100vh"
    backgroundColor="$backgroundSecondary"
  >
    {isLoading && <Loading backgroundColor="$backgroundLayer" />}
    <Stack padding="$5">{children}</Stack>
  </Stack>
);

export default MainLayout;
